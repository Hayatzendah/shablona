import SEO from '../../components/SEO/SEO';
import Accordion from '../../components/Accordion/Accordion';
import faqData from '../../data/faqData';
import styles from './FAQ.module.css';

function FAQ() {
  return (
    <>
      <SEO
        title="الأسئلة الشائعة | شبلونة - حلول التوأمة الرقمية"
        description="إجابات على الأسئلة الشائعة حول شبلونة والتوأمة الرقمية والبراندات الخمسة وخدماتنا المتخصصة."
        keywords="شبلونة، أسئلة شائعة، التوأمة الرقمية، التوأم الرقمي"
      />

      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.pageTitle}>الأسئلة الشائعة</h1>
          <p className={styles.pageSubtitle}>
            إجابات على أكثر الأسئلة شيوعاً حول شبلونة والتوأمة الرقمية
          </p>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqWrapper}>
            <Accordion items={faqData} />
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>لم تجد إجابة على سؤالك؟</h2>
            <p className={styles.ctaText}>تواصل معنا مباشرة وسنرد عليك في أقرب وقت</p>
            <div className={styles.ctaButtons}>
              <a
                href="https://wa.me/201090448295"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                <i className="fab fa-whatsapp"></i>
                تواصل عبر واتساب
              </a>
              <a href="/contact" className={styles.ctaBtnOutline}>
                <i className="fas fa-envelope"></i>
                نموذج التواصل
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
