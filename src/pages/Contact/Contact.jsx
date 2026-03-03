import SEO from '../../components/SEO/SEO';
import ContactForm from '../../components/ContactForm/ContactForm';
import Map from '../../components/Map/Map';
import contactData from '../../data/contactData';
import styles from './Contact.module.css';

const { info } = contactData;

const contactItems = [
  {
    icon: 'fas fa-map-marker-alt',
    label: 'العنوان',
    value: info.address,
    href: null,
  },
  {
    icon: 'fab fa-whatsapp',
    label: 'واتساب',
    value: info.whatsapp,
    href: info.whatsappLink,
    external: true,
  },
  {
    icon: 'fas fa-envelope',
    label: 'البريد الإلكتروني',
    value: info.email,
    href: `mailto:${info.email}`,
  },
  {
    icon: 'fas fa-globe',
    label: 'الموقع الإلكتروني',
    value: info.website,
    href: `https://${info.website}`,
    external: true,
  },
  {
    icon: 'fas fa-clock',
    label: 'ساعات العمل',
    value: info.workingHours,
    href: null,
  },
  {
    icon: 'fab fa-facebook',
    label: 'فيسبوك',
    value: 'شبلونة على فيسبوك',
    href: info.facebook,
    external: true,
  },
  {
    icon: 'fab fa-linkedin-in',
    label: 'لينكد إن',
    value: 'شبلونة على لينكد إن',
    href: info.linkedin,
    external: true,
  },
  {
    icon: 'fab fa-instagram',
    label: 'إنستغرام',
    value: '@shabllona2030',
    href: info.instagram,
    external: true,
  },
];

function Contact() {
  return (
    <>
      <SEO
        title="تواصل معنا | شبلونة - حلول التوأمة الرقمية"
        description="تواصل مع شبلونة عبر الواتساب أو البريد الإلكتروني أو زيارتنا في الدقي، الجيزة. نحن هنا لتحويل رؤيتك إلى واقع رقمي."
        keywords="شبلونة، تواصل معنا، اتصل بنا، التوأمة الرقمية، الدقي، الجيزة"
      />

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className="container">
          <h1 className={styles.heroTitle}>تواصل معنا</h1>
          <p className={styles.heroSubtitle}>
            نحن هنا لتحويل رؤيتك إلى واقع رقمي
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.formColumn}>
              <ContactForm />
            </div>

            <div className={styles.infoColumn}>
              <div className={styles.infoCard}>
                <h2 className={styles.infoTitle}>معلومات التواصل</h2>
                <div className={styles.infoList}>
                  {contactItems.map((item) => (
                    <div key={item.label} className={styles.infoItem}>
                      <div className={styles.infoIcon}>
                        <i className={item.icon} />
                      </div>
                      <div className={styles.infoContent}>
                        <span className={styles.infoLabel}>{item.label}</span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className={styles.infoValue}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            dir={item.label === 'البريد الإلكتروني' || item.label === 'الموقع الإلكتروني' ? 'ltr' : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className={styles.infoValue}>{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.mapSection}>
                <h3 className={styles.mapTitle}>موقعنا على الخريطة</h3>
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
