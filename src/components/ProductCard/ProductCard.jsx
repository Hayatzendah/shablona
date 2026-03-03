import styles from './ProductCard.module.css';

function ProductCard({ name, description, badge, count, brandColor, image, btnText, btnLink, featured }) {
  const isFree = !!badge;
  const whatsappLink = 'https://wa.me/201090448295';

  return (
    <div
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      style={brandColor ? { borderRightColor: brandColor } : undefined}
    >
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder} style={brandColor ? { background: `linear-gradient(135deg, ${brandColor}22, ${brandColor}44)` } : undefined}>
          <i className="fas fa-cube" style={brandColor ? { color: brandColor } : undefined}></i>
        </div>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>

        {count && (
          <div className={styles.countWrapper}>
            <i className="fas fa-layer-group"></i>
            <span>{count}</span>
          </div>
        )}

        <a
          href={isFree ? (btnLink || '#') : whatsappLink}
          target={isFree ? '_self' : '_blank'}
          rel={isFree ? undefined : 'noopener noreferrer'}
          className={`${styles.btn} ${isFree ? styles.btnFree : styles.btnContact}`}
        >
          <i className={isFree ? 'fas fa-download' : 'fab fa-whatsapp'}></i>
          {isFree ? (btnText || 'تحميل مباشر') : 'تواصل معنا'}
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
