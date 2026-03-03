import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import TargetClients from '../../components/TargetClients/TargetClients';
import brandsData from '../../data/brandsData';
import styles from './BrandDetail.module.css';

function BrandDetail() {
  const { brandSlug } = useParams();
  const brand = brandsData.find((b) => b.slug === brandSlug);

  if (!brand) {
    return (
      <>
        <SEO title="البراند غير موجود" description="عذراً، البراند المطلوب غير موجود" />
        <section className={styles.notFound}>
          <div className={styles.notFoundContent}>
            <h1 className={styles.notFoundCode}>404</h1>
            <h2 className={styles.notFoundTitle}>البراند غير موجود</h2>
            <p className={styles.notFoundDesc}>عذراً، البراند الذي تبحث عنه غير موجود</p>
            <Link to="/brands" className={styles.backButton}>
              <i className="fas fa-arrow-right"></i>
              العودة للبراندات
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title={brand.seoTitle}
        description={brand.seoDescription}
        keywords={`شبلونة، ${brand.shortName}، ${brand.element}، ${brand.solid}، توأمة رقمية`}
      />

      {/* Hero Section */}
      <section className={styles.hero} style={{ '--brand-color': brand.color }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroImage}>
          <img
            src={brand.images.hero}
            alt={brand.heroTitle}
            loading="eager"
          />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <i className={`fas ${brand.icon}`}></i>
            <span>{brand.element}</span>
          </div>
          <h1 className={styles.heroTitle}>{brand.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{brand.heroSubtitle}</p>
          <div className={styles.heroMeta}>
            <span className={styles.heroMetaItem}>
              <i className="fas fa-shapes"></i>
              {brand.solid}
            </span>
            <span className={styles.heroMetaItem}>
              <i className="fas fa-cubes"></i>
              {brand.faces}
            </span>
          </div>
        </div>
      </section>

      {/* Brand Video */}
      {brand.video && (
        <section className={styles.videoSection}>
          <video
            className={styles.brandVideo}
            src={brand.video}
            autoPlay
            muted
            loop
            playsInline
          />
        </section>
      )}

      {/* Main Content */}
      <div className={styles.content} style={{ '--brand-color': brand.color }}>
        <div className="container">

          {/* Description */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <i className="fas fa-info-circle"></i>
              <h2 className={styles.sectionTitle}>نبذة عن البراند</h2>
            </div>
            <p className={styles.descriptionText}>{brand.description}</p>
          </section>

          {/* Monte Carlo - Thutmose only */}
          {brand.monteCarloText && (
            <section className={styles.section}>
              <div className={styles.highlightBox}>
                <div className={styles.highlightIcon}>
                  <i className="fas fa-chart-line"></i>
                </div>
                <div>
                  <h3 className={styles.highlightTitle}>محاكاة مونت كارلو</h3>
                  <p className={styles.highlightText}>{brand.monteCarloText}</p>
                </div>
              </div>
            </section>
          )}

          {/* Birth of Idea - Dialogue only */}
          {brand.birthOfIdea && (
            <section className={styles.section}>
              <div className={styles.highlightBox}>
                <div className={styles.highlightIcon}>
                  <i className="fas fa-seedling"></i>
                </div>
                <div>
                  <h3 className={styles.highlightTitle}>ولادة الفكرة</h3>
                  <p className={styles.highlightText}>{brand.birthOfIdea}</p>
                </div>
              </div>
            </section>
          )}

          {/* Portfolio note - Campbell only */}
          {brand.portfolio && (
            <section className={styles.section}>
              <div className={styles.highlightBox}>
                <div className={styles.highlightIcon}>
                  <i className="fas fa-film"></i>
                </div>
                <div>
                  <h3 className={styles.highlightTitle}>نموذج العمل (Portfolio)</h3>
                  <p className={styles.highlightText}>{brand.portfolio}</p>
                </div>
              </div>
            </section>
          )}

          {/* Astrology Problem - Stars only */}
          {brand.astrologyProblem && (
            <section className={styles.section}>
              <div className={styles.highlightBox}>
                <div className={styles.highlightIcon}>
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <div>
                  <h3 className={styles.highlightTitle}>مشكلة الأسترولوجي</h3>
                  <p className={styles.highlightText}>{brand.astrologyProblem}</p>
                </div>
              </div>
            </section>
          )}

          {/* Precession Highlight - Stars only */}
          {brand.precessionHighlight && (
            <section className={styles.section}>
              <div className={styles.precessionBox}>
                <i className="fas fa-compass"></i>
                <p className={styles.precessionText}>{brand.precessionHighlight}</p>
              </div>
            </section>
          )}

          {/* Features */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <i className="fas fa-star"></i>
              <h2 className={styles.sectionTitle}>المميزات</h2>
            </div>
            <ul className={styles.featuresList}>
              {brand.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <span className={styles.featureCheck}>
                    <i className="fas fa-check"></i>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Target Clients */}
          <section className={styles.section}>
            <TargetClients
              clients={brand.targetClients}
              color={brand.color}
            />
          </section>

          {/* CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaInfo}>
                <span className={styles.ctaBadge}>
                  <i className="fas fa-box-open"></i>
                  {brand.shablonasCount}
                </span>
              </div>
              <h3 className={styles.ctaTitle}>مستعد للبدء؟</h3>
              <p className={styles.ctaDesc}>تواصل معنا الآن واكتشف كيف يمكننا مساعدتك</p>
              <div className={styles.ctaButtons}>
                <a
                  href="https://wa.me/201090448295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  <i className="fab fa-whatsapp"></i>
                  {brand.ctaText}
                </a>
                {brand.facebook && (
                  <a
                    href={brand.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButtonSecondary}
                  >
                    <i className="fab fa-facebook-f"></i>
                    تابعنا على فيسبوك
                  </a>
                )}
              </div>
            </div>
          </section>

          {/* Back to Brands */}
          <div className={styles.backNav}>
            <Link to="/brands" className={styles.backLink}>
              <i className="fas fa-arrow-right"></i>
              العودة لجميع البراندات
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default BrandDetail;
