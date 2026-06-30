const i18n = {
  currentLang: navigator.language.startsWith('zh') ? 'zh' : 'en',
  translations: {
    zh: {
      nav: { home: '首页', products: '产品', about: '关于我们', contact: '联系方式' },
      hero: {
        title: 'MX Tattoo Pen',
        subtitle: '专业级纹身笔，为艺术家而生。精准操控，极致舒适，让每一笔都成为杰作。',
        btn: '浏览产品'
      },
      products: { title: '产品系列', subtitle: '为每一位纹身艺术家打造的专业工具' },
      about: {
        title: '关于 MX Tattoo Pen',
        desc1: 'MX Tattoo Pen 专注于纹身设备研发与制造，致力于为全球纹身艺术家提供最优质的纹身笔产品。',
        desc2: '我们的产品采用先进的马达技术和人体工学设计，确保长时间使用的舒适性和稳定性。',
        years: '年行业经验',
        users: '全球用户',
        quality: '品质保证',
        f1: '强劲动力',
        f1d: '高性能马达，稳定输出，穿透力强',
        f2: '人体工学',
        f2d: '轻量化设计，长时间握持不疲劳',
        f3: '精密工艺',
        f3d: 'CNC精密加工，品质卓越',
        f4: '安全认证',
        f4d: 'CE/FCC认证，安全可靠'
      },
      contact: {
        title: '联系我们',
        subtitle: '有任何问题？欢迎随时与我们取得联系',
        email: '邮箱',
        phone: '电话',
        address: '地址',
        addressValue: '中国广东省深圳市'
      },
      modal: {
        features: '产品特点',
        specs: '技术参数',
        close: '关闭',
        buy: '立即购买'
      },
      footer: '© 2026 MX Tattoo Pen. All Rights Reserved.',
      langSwitch: 'English'
    },
    en: {
      nav: { home: 'Home', products: 'Products', about: 'About', contact: 'Contact' },
      hero: {
        title: 'MX Tattoo Pen',
        subtitle: 'Professional tattoo pens, born for artists. Precise control, ultimate comfort, making every stroke a masterpiece.',
        btn: 'Browse Products'
      },
      products: { title: 'Product Series', subtitle: 'Professional tools crafted for every tattoo artist' },
      about: {
        title: 'About MX Tattoo Pen',
        desc1: 'MX Tattoo Pen focuses on the R&D and manufacturing of tattoo equipment, dedicated to providing the highest quality tattoo pen products for artists worldwide.',
        desc2: 'Our products feature advanced motor technology and ergonomic design, ensuring comfort and stability during extended use.',
        years: 'Years Experience',
        users: 'Global Users',
        quality: 'Quality Guarantee',
        f1: 'Powerful Motor',
        f1d: 'High-performance motor, stable output, strong penetration',
        f2: 'Ergonomic',
        f2d: 'Lightweight design, no fatigue during long sessions',
        f3: 'Precision Craft',
        f3d: 'CNC precision machining, excellent quality',
        f4: 'Safety Certified',
        f4d: 'CE/FCC certified, safe and reliable'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Any questions? Feel free to reach out to us',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        addressValue: 'Shenzhen, Guangdong, China'
      },
      modal: {
        features: 'Features',
        specs: 'Specifications',
        close: 'Close',
        buy: 'Buy Now'
      },
      footer: '© 2026 MX Tattoo Pen. All Rights Reserved.',
      langSwitch: '中文'
    }
  },
  t(key) {
    const keys = key.split('.');
    let val = this.translations[this.currentLang];
    for (const k of keys) {
      if (val && val[k] !== undefined) val = val[k];
      else return key;
    }
    return val;
  },
  switchLang() {
    this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
    document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
    this.updatePage();
  },
  updatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = this.t(el.dataset.i18n);
    });
    document.getElementById('lang-switch').textContent = this.t('langSwitch');
    const heroBtn = document.getElementById('hero-btn');
    if (heroBtn) heroBtn.innerHTML = this.t('hero.btn') + ' <i class="bi bi-arrow-right ms-2"></i>';
    const closeBtn = document.querySelector('#productModal .modal-footer .btn-outline-secondary');
    if (closeBtn) closeBtn.textContent = this.t('modal.close');
    const buyBtn = document.querySelector('#productModal .modal-footer .btn-primary');
    if (buyBtn) buyBtn.innerHTML = '<i class="bi bi-cart-plus me-1"></i>' + this.t('modal.buy');
    if (typeof renderProducts === 'function') renderProducts();
    if (typeof updateAboutFeatures === 'function') updateAboutFeatures();
  }
};
