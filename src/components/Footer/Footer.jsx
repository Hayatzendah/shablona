import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const brandLinks = [
  { path: '/brands/thutmose', label: 'شبلونة تحتمس الثالث' },
  { path: '/brands/dialogue', label: 'ماعت' },
  { path: '/brands/aristotle', label: 'شبلونة أرسطو' },
  { path: '/brands/campbell', label: 'شبلونة كامبل' },
  { path: '/brands/stars', label: 'شبلونة مواقع النجوم' },
];

const serviceLinks = [
  'التصميم والتطوير',
  'الاستشارات',
  'التدريب',
  'الدعم الفني',
];

const quickLinks = [
  { path: '/about', label: 'من نحن' },
  { path: 'https://shabllona.com', label: 'المتجر', external: true },
  { path: '/faq', label: 'الأسئلة الشائعة' },
  { path: '/contact', label: 'تواصل معنا' },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerAbout}>
          <Link to="/" className={styles.footerLogo}>
            <img src="/images/logo/shabllona-logo.jpg" alt="شبلونة" className={styles.footerLogoImage} />
            <div className={styles.footerLogoText}>
              <span className={styles.footerLogoName}>شبلونة</span>
              <span className={styles.footerLogoTagline}>حلول التوأمة الرقمية المتقدمة</span>
            </div>
          </Link>
          <p className={styles.description}>نحول رؤيتك إلى واقع رقمي متكامل</p>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/profile.php?id=61587293213599&locale=ar_AR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="فيسبوك"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="لينكد إن"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/shabllona2030/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="إنستغرام"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>البراندات</h4>
          <ul className={styles.footerLinks}>
            {brandLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>الخدمات</h4>
          <ul className={styles.footerLinks}>
            {serviceLinks.map((service) => (
              <li key={service}>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>روابط سريعة</h4>
          <ul className={styles.footerLinks}>
            {quickLinks.map((link) => (
              <li key={link.path}>
                {link.external ? (
                  <a href={link.path} target="_blank" rel="noopener noreferrer">{link.label}</a>
                ) : (
                  <Link to={link.path}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; 2026 شركة شبلونة لحلول التوأمة الرقمية. جميع الحقوق محفوظة.</p>
          <p className={styles.ipNotice}>
            جميع حقوق الملكية الفكرية والعلامات التجارية محفوظة لشركة شبلونة تحت إشراف واستشارة محمد عبد الهادي، ولا يجوز استخدامها دون إذن كتابي مسبق.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
