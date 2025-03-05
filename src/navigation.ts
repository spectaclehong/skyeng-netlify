import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '회사소개',
      links: [
        {
          text: '인사말',
          href: getPermalink('/company/message'),
        },
        {
          text: '연혁',
          href: getPermalink('/company/history'),
        },
        {
          text: '사업장소개',
          href: getPermalink('/company/location'),
        },
      ],
    },
    {
      text: '사업분야',
      links: [
        {
          text: '핵융합사업',
          href: getPermalink('/#features'),
        },
        {
          text: '가속기사업',
          href: getPermalink('/pricing'),
        },
        {
          text: '우주항공사업',
          href: getPermalink('/services'),
        },
        {
          text: '국방과학사업',
          href: getPermalink('/services'),
        },
        {
          text: '2차전지 관련사업',
          href: getPermalink('/services'),
        },
        {
          text: '반도체 관련사업',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      text: '보유기술',
      links: [
        {
          text: '극저온기술',
          href: getPermalink('/technoledge/low-temperature'),
        },
        {
          text: '고진공기술',
          href: getPermalink('/about'),
        },
        {
          text: '특수용접기술',
          href: getPermalink('/about'),
        },
        {
          text: '정밀가공기술',
          href: getPermalink('/about'),
        },
        {
          text: '정밀측정기술',
          href: getPermalink('/about'),
        },
      ],
    },
    {
      text: '홍보센터',
      links: [
        {
          text: '공지사항',
          href: getBlogPermalink(),
        },
        {
          text: '인증자료',
          href: getPermalink('/terms'),
        },
        {
          text: '보도자료',
          href: getPermalink('tutorials', 'category'),
        },
      ],
    },
    {
      text: '고객지원',
      links: [
        {
          text: '문의사항',
          href: getPermalink('/contact'),
        },
        {
          text: '견적접수',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Samples',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
  ],
  // actions: [{ text: '문의하기', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
