import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import homeData from '../../data/homeData';
import { fadeInUp, staggerContainer, viewportConfig } from '../../utils/motion';
import styles from './BrandsPreview.module.css';

const stagger = staggerContainer(0.1);

function BrandsPreview() {
  const { title, subtitle, brands } = homeData.brandsPreview;

  return (
    <section className={styles.brandsPreview}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          {...fadeInUp}
          whileInView="animate"
          initial="initial"
          viewport={viewportConfig}
          variants={{ initial: fadeInUp.initial, animate: fadeInUp.animate }}
        >
          {title}
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          {...fadeInUp}
          whileInView="animate"
          initial="initial"
          viewport={viewportConfig}
          variants={{ initial: fadeInUp.initial, animate: fadeInUp.animate }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className={styles.grid}
          {...stagger}
          whileInView="animate"
          initial="initial"
          viewport={viewportConfig}
        >
          {brands.map((brand, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Link
                to={brand.link}
                className={styles.card}
                style={{ '--brand-color': brand.color }}
              >
                <div className={styles.cardTop} style={{ background: brand.color }}></div>
                <div className={styles.cardContent}>
                  <div className={styles.logoWrapper}>
                    {brand.logo ? (
                      <img src={brand.logo} alt={brand.name} className={styles.brandLogo} />
                    ) : (
                      <div className={styles.iconWrapper} style={{ color: brand.color }}>
                        <i className={`fas ${brand.icon}`}></i>
                      </div>
                    )}
                  </div>
                  <h3 className={styles.brandName}>{brand.name}</h3>
                  <p className={styles.brandSubtitle}>{brand.subtitle}</p>
                  <span className={styles.arrow}>
                    <i className="fas fa-arrow-left"></i>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BrandsPreview;
