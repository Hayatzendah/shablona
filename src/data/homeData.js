const homeData = {
  hero: {
    badge: 'شركة ذات مسؤولية محدودة',
    title: 'شبلونة',
    subtitle: 'حلول التوأمة الرقمية المتقدمة',
    description:
      'نصمم ونطور برمجيات التوائم الرقمية للشركات والمصانع كنشاط أساسي للشركة، إلى جانب أنظمة المحاكاة والذكاء الاصطناعي وحلول التحول الرقمي المتكاملة لصناع القرار',
    primaryBtn: {
      text: 'اكتشف البراندات',
      link: '/brands',
    },
    secondaryBtn: {
      text: 'تواصل معنا',
      link: '/contact',
    },
  },

  painPoints: {
    title: 'هل تعاني من هذه التحديات؟',
    cards: [
      {
        icon: 'fa-money-bill-wave',
        title: 'النفقات الزائدة على الأعطال',
        text: 'هل تعاني كمصنع / شركة كبار، من العديد من النفقات الزائدة، من أجل علاج الأعطال والمشكلات في سلاسل التوريد والتشغيل؟',
      },
      {
        icon: 'fa-chart-line',
        title: 'انخفاض التنافسية في السوق',
        text: 'هل تعاني كشركة / مصنع من انخفاض في التنافسية في سلاسل القيمة بالسوق، خاصة مع التقلبات وعدم اليقين الذي يسود العالم الآن؟',
      },
      {
        icon: 'fa-leaf',
        title: 'استهلاك الطاقة والانبعاثات الكربونية',
        text: 'هل تعاني من كثرة استهلاك الطاقة، وكثرة الانبعاثات الكربونية، مما يؤثر على تكاليف التشغيل والاستدامة البيئية؟',
      },
    ],
    solution:
      'التوأم الرقمي يقدم رؤية شاملة لعملياتك على ما هو موجود في الواقع، مع إمكانية مراقبة الأداء لحظياً، وعلاج استباقي من خلال الكشف المبكر عن المشكلات قبل حدوثها والصيانة الوقائية.',
  },

  stats: {
    title: 'أرقام تتحدث',
    items: [
      {
        value: 49.2,
        suffix: 'مليار دولار',
        label: 'حجم السوق في 2026',
      },
      {
        value: 35.95,
        suffix: '%',
        label: 'معدل النمو السنوي CAGR حتى 2031',
      },
      {
        value: 70,
        suffix: '%',
        label: 'من قادة التكنولوجيا يستثمرون في التوائم الرقمية',
      },
      {
        value: 26,
        suffix: '+',
        label: 'شبلونة جاهزة',
      },
    ],
  },

  brandsPreview: {
    title: 'عائلة شبلونة - ستة براندات',
    subtitle:
      'البراند الرئيسي "التوائم الرقمية للشركات والمصانع" وخمسة براندات فرعية، كل منها مشتق من حلزون فيبوناتشي الأم ويحمل DNA شبلونة مع تخصص فريد',
    brands: [
      {
        name: 'التوائم الرقمية للشركات والمصانع',
        color: '#C9A227',
        icon: 'fa-industry',
        logo: '/images/logo/shabllona-logo.jpg',
        subtitle: 'البراند الرئيسي — B2B',
        link: '/digital-twin',
      },
      {
        name: 'تحتمس الثالث',
        color: '#C0392B',
        icon: 'fa-fire',
        logo: '/images/brands/logos/thutmose-logo.jpg',
        subtitle: 'الاستراتيجية المتقدمة',
        link: '/brands/thutmose',
      },
      {
        name: 'ماعت',
        color: '#C9A227',
        icon: 'fa-wind',
        logo: '/images/brands/logos/dialogue-logo.jpg',
        subtitle: 'UI/UX المتقدم',
        link: '/brands/dialogue',
      },
      {
        name: 'أرسطو',
        color: '#27ae60',
        icon: 'fa-cube',
        logo: '/images/brands/logos/aristotle-logo.jpg',
        subtitle: 'المفاهيمية التفاعلية',
        link: '/brands/aristotle',
      },
      {
        name: 'كامبل',
        color: '#1E90FF',
        icon: 'fa-water',
        logo: '/images/brands/logos/campbell-logo.jpg',
        subtitle: 'السيناريوهات الدرامية',
        link: '/brands/campbell',
      },
      {
        name: 'مواقع النجوم',
        color: '#9932CC',
        icon: 'fa-star',
        logo: '/images/brands/logos/stars-logo.jpg',
        subtitle: 'الحواسب الفلكية',
        link: '/brands/stars',
      },
    ],
  },

  cta: {
    text: 'مستعد لتحويل بياناتك إلى رؤى واضحة؟',
    subtext:
      'تواصل معنا عبر الواتساب الآن واحصل على استشارة مجانية',
    btnText: 'تواصل عبر الواتساب',
    btnLink: 'https://wa.me/201090448295',
  },
};

export default homeData;
