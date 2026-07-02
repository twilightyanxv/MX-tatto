param(
    [Parameter(Mandatory = $true)]
    [string]$ApiKey,

    [string]$SiteUrl = "https://mxtattoo.yanxv.com",

    [string]$SitemapPath = "sitemap.xml"
)

$ErrorActionPreference = "Stop"

function Write-Log {
    param([string]$Message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Write-Host "[$timestamp] $Message"
}

function Submit-Urls {
    param([string[]]$Urls)

    $batchSize = 100
    $total = $Urls.Count
    $submitted = 0

    for ($i = 0; $i -lt $total; $i += $batchSize) {
        $batch = $Urls[$i..[Math]::Min($i + $batchSize - 1, $total - 1)]
        $body = @{
            siteUrl = $SiteUrl
            urlList = @($batch)
        } | ConvertTo-Json

        $params = @{
            Uri         = "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=$ApiKey"
            Method      = "POST"
            Body        = $body
            ContentType = "application/json"
        }

        try {
            $response = Invoke-RestMethod @params
            $submitted += $batch.Count
            Write-Log "OK: 已提交 $($batch.Count) 个 URL（累计 $submitted/$total）"
        }
        catch {
            $statusCode = $_.Exception.Response.StatusCode.value__
            if ($statusCode -eq 429) {
                Write-Log "WARN: 触发频率限制，等待 60 秒后重试..."
                Start-Sleep -Seconds 60
                $i -= $batchSize
                continue
            }
            Write-Log "ERROR: 提交失败（HTTP $statusCode）: $_"
        }
    }

    return $submitted
}

function Get-UrlsFromSitemap {
    param([string]$Path)

    if (-not (Test-Path -LiteralPath $Path)) {
        throw "未找到 sitemap 文件: $Path"
    }

    [xml]$xml = Get-Content -Path $Path -Raw
    $ns = @{sm = "http://www.sitemaps.org/schemas/sitemap/0.9"}
    $urls = $xml.urlset.url | ForEach-Object { $_.loc.Trim() } | Where-Object { $_ -ne "" }
    return $urls
}

Write-Log "开始向 Bing Webmaster Tools 提交 URL..."
Write-Log "站点: $SiteUrl"

try {
    $urls = Get-UrlsFromSitemap -Path $SitemapPath
    Write-Log "从 sitemap 中解析到 $($urls.Count) 个 URL"

    $submitted = Submit-Urls -Urls $urls
    Write-Log "完成！成功提交 $submitted 个 URL 到 Bing"
}
catch {
    Write-Log "FATAL: $_"
    exit 1
}
