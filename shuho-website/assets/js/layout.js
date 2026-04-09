const page = document.body.dataset.page || 'index';

const navItems = [
  { href: './about.html', label: '塾について', key: 'about' },
  { href: './masters.html', label: '師範', key: 'masters' },
  { href: './courses.html', label: 'コース', key: 'courses' },
  { href: './portfolio.html', label: '作品', key: 'portfolio' },
  { href: './faq.html', label: 'FAQ', key: 'faq' },
  { href: './access.html', label: 'アクセス', key: 'access' },
  { href: './contact.html', label: 'お問い合わせ', key: 'contact', isContact: true },
];

function renderHeader() {
  const nav = navItems
    .map((item) => {
      const classes = [item.isContact ? 'nav-contact' : '', item.key === page ? 'is-current' : '']
        .filter(Boolean)
        .join(' ');
      return `<a href="${item.href}"${classes ? ` class="${classes}"` : ''}>${item.label}</a>`;
    })
    .join('');

  return `
    <div class="container header-inner">
      <a class="logo" href="./index.html" aria-label="秀峰書道サロン">
        <img class="logo-image" src="./assets/images/logo/logo-shuho.jpg" alt="秀峰書道サロン ロゴ">
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="global-nav">メニュー</button>
      <nav id="global-nav" class="global-nav" aria-label="Global Navigation">${nav}</nav>
    </div>
  `;
}

function renderFooter() {
  return `
    <div class="container footer-inner">
      <nav aria-label="Footer Navigation">
        <a href="./contact.html">お問い合わせ</a>
        <a href="tel:0000000000">電話</a>
        <a href="./privacy.html">プライバシーポリシー</a>
        <a href="./admin/enquiries.html">管理画面</a>
      </nav>
      <p>&copy; Shuho Calligraphy Salon</p>
    </div>
  `;
}

function renderSpCta() {
  return `
    <a class="btn-primary" href="./contact.html">お問い合わせフォーム</a>
    <a class="btn-ghost" href="tel:0000000000">電話</a>
  `;
}

const headerRoot = document.querySelector('#site-header');
if (headerRoot) {
  headerRoot.className = 'site-header';
  headerRoot.innerHTML = renderHeader();
}

const footerRoot = document.querySelector('#site-footer');
if (footerRoot) {
  footerRoot.className = 'site-footer';
  footerRoot.innerHTML = renderFooter();
}

const ctaRoot = document.querySelector('#sp-fixed-cta');
if (ctaRoot) {
  ctaRoot.className = 'sp-fixed-cta';
  ctaRoot.setAttribute('aria-label', 'スマホ固定CTA');
  ctaRoot.innerHTML = renderSpCta();
}



