import SEO from '../../components/SEO/SEO';
import BrandCard from '../../components/BrandCard/BrandCard';
import brandsData from '../../data/brandsData';
import styles from './Brands.module.css';

function Brands() {
  return (
    <>
      <SEO
        title="براندات شبلونة | خمسة براندات متخصصة في التوأمة الرقمية"
        description="تعرف على براندات شبلونة الخمسة المتخصصة في التوأمة الرقمية، كل منها مستوحى من أحد الأجسام الأفلاطونية الخمسة وعناصر الطبيعة."
        keywords="شبلونة، براندات، تحتمس، أرسطو، كامبل، مواقع النجوم، ماعت"
      />

      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>براندات شبلونة</h1>
          <p className={styles.heroSubtitle}>
            خمسة براندات متخصصة، كل منها مستوحى من أحد الأجسام الأفلاطونية الخمسة
            وعنصر من عناصر الطبيعة
          </p>
          <div className={styles.heroElements}>
            <span className={styles.elementTag}><i className="fas fa-fire"></i> النار</span>
            <span className={styles.elementTag}><i className="fas fa-wind"></i> الهواء</span>
            <span className={styles.elementTag}><i className="fas fa-globe-africa"></i> الأرض</span>
            <span className={styles.elementTag}><i className="fas fa-water"></i> الماء</span>
            <span className={styles.elementTag}><i className="fas fa-star"></i> الإثير</span>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/images/brands/brands-overview.webp"
            alt="براندات شبلونة - الأجسام الأفلاطونية الخمسة"
            loading="eager"
          />
        </div>
      </section>

      <section className={styles.brandsSection}>
        <div className="container">
          <div className={styles.grid}>
            {brandsData.map((brand) => (
              <BrandCard
                key={brand.slug}
                slug={brand.slug}
                name={brand.name}
                element={brand.element}
                solid={brand.solid}
                color={brand.color}
                description={brand.description}
                icon={brand.icon}
                faces={brand.faces}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Brands;
