import styles from './PortfolioCard.module.css';

function PortfolioCard({ title, description, brand, brandColor, status, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={styles.imageOverlay} />
        </div>
        <span
          className={styles.brandBadge}
          style={{ backgroundColor: brandColor }}
        >
          {brand}
        </span>
        <span className={styles.statusBadge}>{status}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span
            className={styles.brandIndicator}
            style={{ backgroundColor: brandColor }}
          />
          <span className={styles.brandName} style={{ color: brandColor }}>
            {brand}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
