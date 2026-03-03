import aboutData from '../../data/aboutData';
import styles from './Philosophy.module.css';

function Philosophy() {
  const { image, title, subtitle, items } = aboutData.platonicSolids;

  return (
    <section className={styles.philosophy}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        {image && (
          <div className={styles.imageWrapper}>
            <img src={image} alt="الأجسام الأفلاطونية الخمسة" className={styles.sectionImage} />
          </div>
        )}
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ '--card-accent': item.color }}
            >
              <div className={styles.cardHeader} style={{ borderColor: item.color }}>
                <span className={styles.element} style={{ color: item.color }}>
                  {item.element}
                </span>
                <span className={styles.faces}>{item.faces}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.solidName}>{item.solid}</h3>
                <div className={styles.brandTag} style={{ background: item.color }}>
                  {item.brand}
                </div>
                <p className={styles.properties}>{item.properties}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
