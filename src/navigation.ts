import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '회사소개',
      links: [
        {
          text: '인사말',
          href: getPermalink('/company/greeting'),
        },
        {
          text: '연혁',
          href: getPermalink('/company/history'),
        },
        {
          text: '사업장소개',
          href: getPermalink('/company/locations'),
        },
      ],
    },
    {
      text: '사업분야',
      links: [
        {
          text: '핵융합사업',
          href: getPermalink('/business/fusion'),
        },
        {
          text: '가속기사업',
          href: getPermalink('/business/accelerator'),
        },
        {
          text: '우주항공사업',
          href: getPermalink('/business/aerospace'),
        },
        {
          text: '국방과학사업',
          href: getPermalink('/business/defense'),
        },
        {
          text: '2차전지 관련사업',
          href: getPermalink('/business/battery'),
        },
        {
          text: '반도체 관련사업',
          href: getPermalink('/business/semiconductor'),
        },
      ],
    },
    {
      text: '보유기술',
      links: [
        {
          text: '극저온기술',
          href: getPermalink('/technology/cryogenic'),
        },
        {
          text: '고진공기술',
          href: getPermalink('/technology/uhv'),
        },
        {
          text: '특수용접기술',
          href: getPermalink('/technology/specialwelding'),
        },
        {
          text: '정밀가공기술',
          href: getPermalink('/technology/precision-machining'),
        },
        {
          text: '정밀측정기술',
          href: getPermalink('/technology/precision-measurement'),
        },
      ],
    },
    {
      text: '홍보센터',
      links: [
        {
          text: '공지사항',
          href: getPermalink('/pr/notice'),
        },
        {
          text: '인증자료',
          href: getPermalink('/pr/certifications'),
        },
        {
          text: '보도자료',
          href: getPermalink('/pr/press'),
        },
      ],
    },
    {
      text: '고객지원',
      links: [
        {
          text: '문의사항',
          href: getPermalink('/support/inquiry'),
        },
        {
          text: '견적접수',
          href: getPermalink('/support/quote'),
        },
      ],
    },
  ],
  actions: [{ text: '프로젝트 상담', href: getPermalink('/support/quote'), target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: '회사소개',
      links: [
        { text: '인사말', href: getPermalink('/company/message') },
        { text: '연혁', href: getPermalink('/company/history') },
        { text: '사업장소개', href: getPermalink('/company/location') },
      ],
    },
    {
      title: '사업분야',
      links: [
        { text: '핵융합사업', href: getPermalink('/business/fusion') },
        { text: '가속기사업', href: getPermalink('/business/accelerator') },
        { text: '우주항공사업', href: getPermalink('/business/aerospace') },
        { text: '국방과학사업', href: getPermalink('/business/defense') },
      ],
    },
    {
      title: '보유기술',
      links: [
        { text: '극저온기술', href: getPermalink('/technology/cryogenic') },
        { text: '고진공기술', href: getPermalink('/technology/uhv') },
        { text: '특수용접기술', href: getPermalink('/technology/specialwelding') },
        { text: '정밀가공기술', href: getPermalink('/technology/precision-machining') },
      ],
    },
    {
      title: '고객지원',
      links: [
        { text: '문의사항', href: getPermalink('/support/inquiry') },
        { text: '견적접수', href: getPermalink('/support/quote') },
        { text: '공지사항', href: getPermalink('/pr/notice') },
        { text: '인증자료', href: getPermalink('/pr/certifications') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '개인정보처리방침', href: getPermalink('/privacy') },
    { text: '이용약관', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: '이메일', icon: 'tabler:mail', href: 'mailto:info@skyeng.co.kr' },
    { ariaLabel: '전화', icon: 'tabler:phone', href: 'tel:+82-63-XXX-XXXX' },
  ],
  footNote: `
    <span class="font-semibold">㈜하늘엔지니어링</span> · 전북 군산시 산업로 1336-17 (삼산동) · 대표이사: OOO<br>
    사업자등록번호: XXX-XX-XXXXX · 통신판매업신고번호: 제XXXX-전북군산-XXXX호<br>
    © 2024 Sky Engineering Co., Ltd. All rights reserved.
  `,
};
