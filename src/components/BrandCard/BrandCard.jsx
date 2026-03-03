import { Link } from 'react-router-dom';
import styles from './BrandCard.module.css';

function BrandCard({ name, element, solid, color, description, icon, slug, faces }) {
  return (
    <Link
      to={`/brands/${slug}`}
      className={styles.card}
      style={{ '--brand-color': color }}
    >
      <div className={styles.cardTop}>
        <div className={styles.iconWrapper}>
          <i className={`fas ${icon}`}></i>
        </div>
        <h3 className={styles.name}>{name}</h3>
      </div>

      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <i className="fas fa-atom"></i>
          {element}
        </span>
        <span className={styles.metaItem}>
          <i className="fas fa-shapes"></i>
          {solid}
        </span>
        <span className={styles.metaItem}>
          <i className="fas fa-cubes"></i>
          {faces}
        </span>
      </div>

      <p className={styles.description}>{description}</p>

      <span className={styles.cta}>
        اكتشف المزيد
        <i className="fas fa-arrow-left"></i>
      </span>
    </Link>
  );
}

export default BrandCard;
