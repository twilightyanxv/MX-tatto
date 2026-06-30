const products = [
  {
    id: 1,
    name: '无线纹身笔，全抛式一体机',
    nameEn: 'Wireless Tattoo Pen, Cartridge PMU Machine',
    price: '¥399',
    priceEn: '$59',
    badge: '热销',
    badgeEn: 'Hot',
    desc: '航空级铝合金握柄，无线操作设计，内置高性能电机提供强劲动力，静音传动系统带来更佳体验。',
    descEn: 'Aircraft grade aluminium grip, wireless operation, built-in high performance motor with strong power, silent transmission system for better experience.',
    features: [
      '航空级连杆铝合金握柄，高压蒸汽灭菌 + 冷喷技术处理',
      '无线操作，同时充电，摆脱线缆困扰',
      '内置电池可工作2.5小时以上',
      '高性能电机，强劲动力，高速运转，静音不发热',
      '静音传动系统，操作便捷，性能稳定，持久耐用'
    ],
    featuresEn: [
      'Aircraft grade linkage aluminium grip, autoclave steam + cold spray technology',
      'Wireless operation, charge while using, no more annoying cables',
      'Built-in battery works over 2.5 hours',
      'High performance motor, strong power, fast speed, silent and no overheating',
      'Silent transmission, convenient operation, stable performance, lasting durability'
    ],
    specs: {
      '握柄材质': '航空级连杆铝合金（阳极氧化）',
      '操作方式': '无线 / 同时充电',
      '电池续航': '2.5小时以上',
      '马达类型': '高性能内置电机',
      '传动系统': '静音传动系统',
      '尺寸': '215×120×35mm',
      '重量': '260g'
    },
    specsEn: {
      'Grip Material': 'Aircraft grade linkage aluminium (anodised)',
      'Operation': 'Wireless / Charge while using',
      'Battery Life': 'Over 2.5 hours',
      'Motor': 'High performance built-in motor',
      'Transmission': 'Silent transmission system',
      'Dimensions': '215×120×35mm',
      'Weight': '260g'
    },
    color: '#e74c3c',
    image: 'imgs/PMU-020/main.png',
    images: [
      'imgs/PMU-020/1.jpg',
      'imgs/PMU-020/2.jpg',
      'imgs/PMU-020/3.jpg',
      'imgs/PMU-020/4.jpg',
      'imgs/PMU-020/5.jpg',
      'imgs/PMU-020/6.jpg',
      'imgs/PMU-020/7.jpg'
    ]
  },
  // {
  //   id: 2,
  //   name: 'MX-Lite 有线纹身笔',
  //   nameEn: 'MX-Lite Wired Tattoo Pen',
  //   price: '¥699',
  //   priceEn: '$99',
  //   badge: '入门',
  //   badgeEn: 'Starter',
  //   desc: '轻量级有线纹身笔，仅重98g，适合初学者和精细线条勾勒。',
  //   descEn: 'Lightweight wired tattoo pen, only 98g, perfect for beginners and fine line work.',
  //   features: ['超轻机身，仅98g', 'RCA接口，兼容性强', '可调行程2.5-4.5mm', '适合精细线条和 shading'],
  //   featuresEn: ['Ultra-light body, only 98g', 'RCA connector, strong compatibility', 'Adjustable stroke 2.5-4.5mm', 'Ideal for fine lines and shading'],
  //   specs: { '马达类型': '日本 NIDEC 马达', '连接方式': 'RCA有线', '行程范围': '2.5-4.5mm', '重量': '98g', '材质': '航空铝合金' },
  //   specsEn: { 'Motor': 'Japan NIDEC Motor', 'Connection': 'RCA Wired', 'Stroke': '2.5-4.5mm', 'Weight': '98g', 'Material': 'Aerospace Aluminum' },
  //   color: '#3498db',
  //   svg: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" class="product-svg">
  //     <defs><linearGradient id="p2g" x1="0%" y1="0%" x2="100%" y2="100%">
  //       <stop offset="0%" style="stop-color:#3498db;stop-opacity:1"/>
  //       <stop offset="100%" style="stop-color:#2980b9;stop-opacity:1"/>
  //     </linearGradient></defs>
  //     <rect x="50" y="30" width="100" height="200" rx="18" fill="url(#p2g)" opacity="0.9"/>
  //     <rect x="45" y="100" width="110" height="90" rx="10" fill="#333" opacity="0.8"/>
  //     <line x1="55" y1="110" x2="145" y2="110" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="120" x2="145" y2="120" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="130" x2="145" y2="130" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="140" x2="145" y2="140" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="150" x2="145" y2="150" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="160" x2="145" y2="160" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="170" x2="145" y2="170" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="180" x2="145" y2="180" stroke="#555" stroke-width="1.5"/>
  //     <polygon points="90,230 110,230 100,270" fill="#ccc"/>
  //     <circle cx="100" cy="25" r="12" fill="#444"/>
  //     <text x="100" y="100" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold" font-family="Arial">MX-Lite</text>
  //   </svg>`
  // },
  // {
  //   id: 3,
  //   name: 'MX-Duo 双马达纹身笔',
  //   nameEn: 'MX-Duo Dual Motor Tattoo Pen',
  //   price: '¥1,899',
  //   priceEn: '$259',
  //   badge: '旗舰',
  //   badgeEn: 'Flagship',
  //   desc: '旗舰级双马达纹身笔，独立驱动系统，实现前所未有的精准控制。',
  //   descEn: 'Flagship dual-motor tattoo pen with independent drive system for unprecedented precision control.',
  //   features: ['双马达独立驱动系统', 'OLED显示屏，实时查看转速', '蓝牙APP连接，自定义曲线', '航天级钛合金机身'],
  //   featuresEn: ['Dual motor independent drive', 'OLED display, real-time speed monitoring', 'Bluetooth APP control, custom curves', 'Aerospace titanium alloy body'],
  //   specs: { '马达类型': '双无刷马达', '显示屏': '0.96寸 OLED', '连接方式': '蓝牙5.0', '重量': '145g', '材质': '钛合金' },
  //   specsEn: { 'Motor': 'Dual Brushless Motor', 'Display': '0.96" OLED', 'Connection': 'Bluetooth 5.0', 'Weight': '145g', 'Material': 'Titanium Alloy' },
  //   color: '#9b59b6',
  //   svg: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" class="product-svg">
  //     <defs><linearGradient id="p3g" x1="0%" y1="0%" x2="100%" y2="100%">
  //       <stop offset="0%" style="stop-color:#9b59b6;stop-opacity:1"/>
  //       <stop offset="100%" style="stop-color:#8e44ad;stop-opacity:1"/>
  //     </linearGradient></defs>
  //     <rect x="50" y="30" width="100" height="200" rx="18" fill="url(#p3g)" opacity="0.9"/>
  //     <rect x="45" y="110" width="110" height="90" rx="10" fill="#333" opacity="0.8"/>
  //     <line x1="55" y1="120" x2="145" y2="120" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="130" x2="145" y2="130" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="140" x2="145" y2="140" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="150" x2="145" y2="150" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="160" x2="145" y2="160" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="170" x2="145" y2="170" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="180" x2="145" y2="180" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="190" x2="145" y2="190" stroke="#555" stroke-width="1.5"/>
  //     <polygon points="90,230 110,230 100,270" fill="#ccc"/>
  //     <rect x="80" y="70" width="40" height="25" rx="3" fill="#222"/>
  //     <text x="100" y="87" text-anchor="middle" fill="#2ecc71" font-size="8" font-family="monospace">▶ 12000</text>
  //     <circle cx="100" cy="25" r="12" fill="#444"/>
  //     <circle cx="100" cy="25" r="6" fill="#9b59b6"/>
  //     <text x="100" y="105" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold" font-family="Arial">MX-Duo</text>
  //   </svg>`
  // },
  // {
  //   id: 4,
  //   name: 'MX-Mini 便携纹身笔',
  //   nameEn: 'MX-Mini Portable Tattoo Pen',
  //   price: '¥899',
  //   priceEn: '$129',
  //   badge: '便携',
  //   badgeEn: 'Portable',
  //   desc: '迷你便携款纹身笔，仅长12cm，轻松放入口袋，随时随地创作。',
  //   descEn: 'Mini portable tattoo pen, only 12cm long, fits in your pocket, create anytime anywhere.',
  //   features: ['超迷你机身，仅12cm', '可充电锂电池', '适合旅行和外出创作', '附送便携收纳盒'],
  //   featuresEn: ['Ultra-mini body, only 12cm', 'Rechargeable lithium battery', 'Ideal for travel and mobile work', 'Includes portable storage case'],
  //   specs: { '长度': '12cm', '电池': '1200mAh', '转速': '3000-10000rpm', '重量': '85g', '充电': 'Type-C' },
  //   specsEn: { 'Length': '12cm', 'Battery': '1200mAh', 'Speed': '3000-10000rpm', 'Weight': '85g', 'Charging': 'Type-C' },
  //   color: '#2ecc71',
  //   svg: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" class="product-svg">
  //     <defs><linearGradient id="p4g" x1="0%" y1="0%" x2="100%" y2="100%">
  //       <stop offset="0%" style="stop-color:#2ecc71;stop-opacity:1"/>
  //       <stop offset="100%" style="stop-color:#27ae60;stop-opacity:1"/>
  //     </linearGradient></defs>
  //     <rect x="55" y="40" width="90" height="180" rx="15" fill="url(#p4g)" opacity="0.9"/>
  //     <rect x="50" y="110" width="100" height="80" rx="8" fill="#333" opacity="0.8"/>
  //     <line x1="60" y1="120" x2="140" y2="120" stroke="#555" stroke-width="1.5"/>
  //     <line x1="60" y1="130" x2="140" y2="130" stroke="#555" stroke-width="1.5"/>
  //     <line x1="60" y1="140" x2="140" y2="140" stroke="#555" stroke-width="1.5"/>
  //     <line x1="60" y1="150" x2="140" y2="150" stroke="#555" stroke-width="1.5"/>
  //     <line x1="60" y1="160" x2="140" y2="160" stroke="#555" stroke-width="1.5"/>
  //     <line x1="60" y1="170" x2="140" y2="170" stroke="#555" stroke-width="1.5"/>
  //     <line x1="60" y1="180" x2="140" y2="180" stroke="#555" stroke-width="1.5"/>
  //     <polygon points="95,220 105,220 100,250" fill="#ccc"/>
  //     <circle cx="100" cy="35" r="10" fill="#444"/>
  //     <circle cx="100" cy="35" r="5" fill="#2ecc71"/>
  //     <text x="100" y="95" text-anchor="middle" fill="#fff" font-size="15" font-weight="bold" font-family="Arial">Mini</text>
  //   </svg>`
  // },
  // {
  //   id: 5,
  //   name: 'MX-Art 艺术家限定版',
  //   nameEn: 'MX-Art Artist Edition',
  //   price: '¥2,399',
  //   priceEn: '$329',
  //   badge: '限定',
  //   badgeEn: 'Limited',
  //   desc: '与知名纹身艺术家联名设计，独特外观配以顶级性能，限量发售。',
  //   descEn: 'Co-designed with renowned tattoo artists, unique appearance with top-tier performance, limited edition.',
  //   features: ['艺术家联名设计外观', '24K镀金接口', '专属定制收纳箱', '限量编号证书'],
  //   featuresEn: ['Artist co-designed appearance', '24K gold-plated connector', 'Custom storage case', 'Limited edition certificate'],
  //   specs: { '马达': '瑞士 Maxon 马达', '表面工艺': '24K镀金/陶瓷涂层', '接口': '镀金RCA', '限量': '全球999支', '重量': '135g' },
  //   specsEn: { 'Motor': 'Swiss Maxon Motor', 'Finish': '24K Gold/Ceramic Coating', 'Connector': 'Gold-plated RCA', 'Edition': '999 units worldwide', 'Weight': '135g' },
  //   color: '#f39c12',
  //   svg: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" class="product-svg">
  //     <defs><linearGradient id="p5g" x1="0%" y1="0%" x2="100%" y2="100%">
  //       <stop offset="0%" style="stop-color:#f39c12;stop-opacity:1"/>
  //       <stop offset="100%" style="stop-color:#d68910;stop-opacity:1"/>
  //     </linearGradient></defs>
  //     <rect x="50" y="30" width="100" height="200" rx="18" fill="url(#p5g)" opacity="0.9"/>
  //     <rect x="45" y="110" width="110" height="90" rx="10" fill="#2c2c2c" opacity="0.85"/>
  //     <line x1="55" y1="120" x2="145" y2="120" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="130" x2="145" y2="130" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="140" x2="145" y2="140" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="150" x2="145" y2="150" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="160" x2="145" y2="160" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="170" x2="145" y2="170" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="180" x2="145" y2="180" stroke="#555" stroke-width="1.5"/>
  //     <line x1="55" y1="190" x2="145" y2="190" stroke="#555" stroke-width="1.5"/>
  //     <polygon points="90,230 110,230 100,270" fill="#f1c40f"/>
  //     <circle cx="100" cy="25" r="12" fill="#444"/>
  //     <circle cx="100" cy="25" r="6" fill="#f39c12"/>
  //     <text x="100" y="102" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="bold" font-family="serif">★ Art ★</text>
  //   </svg>`
  // },
  // {
  //   id: 6,
  //   name: 'MX-Cartridge 套装',
  //   nameEn: 'MX-Cartridge Kit',
  //   price: '¥399',
  //   priceEn: '$55',
  //   badge: '配件',
  //   badgeEn: 'Accessory',
  //   desc: 'MX系列专用针头套装，包含10种常用规格，满足不同纹身需求。',
  //   descEn: 'MX series专用 cartridge set, includes 10 commonly used specifications for different tattoo needs.',
  //   features: ['10种规格针头', '医用级304不锈钢', '独立无菌包装', '兼容MX全系列'],
  //   featuresEn: ['10 needle specifications', 'Medical-grade 304 stainless steel', 'Individual sterile packaging', 'Compatible with all MX series'],
  //   specs: { '规格': '10种 (RL/RS/M1/等)', '材质': '304不锈钢', '包装': '独立无菌包装', '兼容性': 'MX全系列', '数量': '50支/盒' },
  //   specsEn: { 'Specs': '10 types (RL/RS/M1/etc)', 'Material': '304 Stainless Steel', 'Packaging': 'Individual sterile', 'Compatibility': 'All MX series', 'Qty': '50 pcs/box' },
  //   color: '#1abc9c',
  //   svg: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" class="product-svg">
  //     <defs><linearGradient id="p6g" x1="0%" y1="0%" x2="100%" y2="100%">
  //       <stop offset="0%" style="stop-color:#1abc9c;stop-opacity:1"/>
  //       <stop offset="100%" style="stop-color:#16a085;stop-opacity:1"/>
  //     </linearGradient></defs>
  //     <rect x="40" y="40" width="120" height="200" rx="12" fill="url(#p6g)" opacity="0.9"/>
  //     <rect x="50" y="50" width="100" height="30" rx="5" fill="rgba(255,255,255,0.15)"/>
  //     <text x="100" y="70" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Cartridge Kit</text>
  //     <rect x="55" y="95" width="30" height="55" rx="3" fill="rgba(255,255,255,0.2)"/>
  //     <rect x="95" y="95" width="30" height="55" rx="3" fill="rgba(255,255,255,0.2)"/>
  //     <rect x="135" y="95" width="30" height="55" rx="3" fill="rgba(255,255,255,0.2)"/>
  //     <rect x="55" y="160" width="30" height="55" rx="3" fill="rgba(255,255,255,0.2)"/>
  //     <rect x="95" y="160" width="30" height="55" rx="3" fill="rgba(255,255,255,0.2)"/>
  //     <rect x="135" y="160" width="30" height="55" rx="3" fill="rgba(255,255,255,0.2)"/>
  //     <line x1="70" y1="100" x2="70" y2="145" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
  //     <line x1="110" y1="100" x2="110" y2="145" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
  //     <line x1="150" y1="100" x2="150" y2="145" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
  //     <text x="100" y="240" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">50支/盒</text>
  //   </svg>`
  // }
];
