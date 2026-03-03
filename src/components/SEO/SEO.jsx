import { Helmet } from 'react-helmet-async';

function SEO({ title, description, keywords }) {
  const siteName = 'شبلونة';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | حلول التوأمة الرقمية المتقدمة`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default SEO;
