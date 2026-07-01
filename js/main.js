function getText(product, key) {
  const isEn = i18n.currentLang === 'en';
  return isEn ? product[key + 'En'] || product[key] : product[key];
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  products.forEach(p => {
    const name = getText(p, 'name');
    const price = getText(p, 'price');
    const badge = getText(p, 'badge');
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="product-card" data-id="${p.id}" id="product-${p.id}">
        <div class="product-badge">${badge}</div>
        <div class="product-image">
          <img src="${p.image}" alt="${name}" class="product-img">
        </div>
        <div class="product-info">
          <h5 class="product-name">${name}</h5>
          <div class="product-price">${price}</div>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

function openModal(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  const isEn = i18n.currentLang === 'en';
  document.getElementById('modal-name').textContent = getText(p, 'name');
  document.getElementById('modal-badge').textContent = getText(p, 'badge');
  document.getElementById('modal-price').textContent = getText(p, 'price');
  document.getElementById('modal-desc').textContent = getText(p, 'desc');
  document.getElementById('modal-image').innerHTML = `<img src="${p.image}" alt="${getText(p, 'name')}" class="img-fluid">`;

  const features = isEn ? p.featuresEn : p.features;
  const featuresHtml = features.map(f => `<li><i class="bi bi-check-circle-fill text-success me-2"></i>${f}</li>`).join('');
  document.getElementById('modal-features').innerHTML = featuresHtml;
  const mobileFeatures = document.getElementById('modal-features-mobile');
  if (mobileFeatures) mobileFeatures.innerHTML = featuresHtml;

  const specs = isEn ? p.specsEn : p.specs;
  const tbody = document.getElementById('modal-specs');
  tbody.innerHTML = Object.entries(specs).map(([k, v]) => `<tr><td class="fw-semibold" style="width:40%">${k}</td><td>${v}</td></tr>`).join('');

  document.getElementById('productModalLabel').textContent = getText(p, 'name');
  document.querySelector('#productModal .modal-footer .btn-outline-secondary').textContent = i18n.t('modal.close');
  const buyBtn = document.querySelector('#productModal .modal-footer .btn-primary');
  if (buyBtn) buyBtn.innerHTML = `<i class="bi bi-cart-plus me-1"></i>${i18n.t('modal.buy')}`;
  document.querySelector('[data-i18n="modal.features"]').textContent = i18n.t('modal.features');
  document.querySelector('[data-i18n="modal.specs"]').textContent = i18n.t('modal.specs');

  const gallery = document.getElementById('modal-gallery');
  gallery.innerHTML = '';
  if (p.images) {
    gallery.className = 'mt-4';
    p.images.forEach(src => {
      const div = document.createElement('div');
      div.className = 'mb-3';
      const imgName = src.split('/').pop().replace(/\.\w+$/, '');
      div.innerHTML = `<img src="${src}" alt="${getText(p, 'name')} - 细节图 ${imgName}" class="img-fluid rounded w-100">`;
      gallery.appendChild(div);
    });
  }

  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}

function updateAboutFeatures() {
  document.querySelectorAll('[data-i18n-about]').forEach(el => {
    el.textContent = i18n.t(el.dataset.i18nAbout);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();

  document.getElementById('product-grid').addEventListener('click', e => {
    const card = e.target.closest('.product-card');
    if (card) openModal(parseInt(card.dataset.id));
  });

  document.getElementById('lang-switch').addEventListener('click', e => {
    e.preventDefault();
    i18n.switchLang();
  });

  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', e => {
      const target = a.getAttribute('href');
      if (target && target.startsWith('#') && target !== '#') {
        e.preventDefault();
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
        const nav = document.querySelector('.navbar-collapse');
        if (nav.classList.contains('show')) {
          bootstrap.Collapse.getInstance(nav)?.hide();
        }
      }
    });
  });

  i18n.updatePage();
});
