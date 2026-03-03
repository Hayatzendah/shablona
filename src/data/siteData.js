const siteData = {
  company: {
    name: 'شبلونة',
    nameEn: 'Shabllona',
    tagline: 'حلول التوأمة الرقمية المتقدمة',
  },
  contact: {
    phone: '+201090448295',
    whatsapp: 'https://wa.me/201090448295',
    email: 'Info@Shabllona.org',
    address: '3 ش الأنصار، بجوار محطة البحوث، الدقي، الجيزة، مصر',
    website: 'Shabllona.org',
    workingHours: '10 صباحاً - 12 منتصف الليل (يومياً)',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61587293213599&locale=ar_AR',
    linkedin: 'https://www.linkedin.com/feed/',
    instagram: 'https://www.instagram.com/shabllona2030/',
  },
  navLinks: [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'من نحن' },
    { path: '/brands', label: 'البراندات' },
    { path: 'https://shabllona.org', label: 'المنتجات', external: true },
    { path: '/digital-twin', label: 'التوأم الرقمي' },
    { path: '/faq', label: 'الأسئلة الشائعة' },
    { path: '/contact', label: 'تواصل معنا' },
  ],
  brandLinks: [
    { path: '/brands/thutmose', label: 'شبلونة تحتمس الثالث', color: '#C0392B' },
    { path: '/brands/dialogue', label: 'ماعت', color: '#C9A227' },
    { path: '/brands/aristotle', label: 'شبلونة أرسطو', color: '#27ae60' },
    { path: '/brands/campbell', label: 'شبلونة كامبل', color: '#1E90FF' },
    { path: '/brands/stars', label: 'شبلونة مواقع النجوم', color: '#9932CC' },
  ],
};

export default siteData;
