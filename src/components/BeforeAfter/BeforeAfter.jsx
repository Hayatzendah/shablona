import styles from './BeforeAfter.module.css';

function BeforeAfter({ items }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={`${styles.headerCell} ${styles.beforeHeader}`}>
          <i className="fas fa-times-circle"></i>
          <span>قبل التوأم الرقمي</span>
        </div>
        <div className={`${styles.headerCell} ${styles.afterHeader}`}>
          <i className="fas fa-check-circle"></i>
          <span>بعد التوأم الرقمي</span>
        </div>
      </div>
      <div className={styles.rows}>
        {items.map((item, index) => (
          <div key={index} className={styles.row}>
            <div className={`${styles.cell} ${styles.beforeCell}`}>
              <span className={styles.cellIcon}><i className="fas fa-arrow-down"></i></span>
              <span>{item.before}</span>
            </div>
            <div className={styles.divider}>
              <i className="fas fa-arrow-left"></i>
            </div>
            <div className={`${styles.cell} ${styles.afterCell}`}>
              <span className={styles.cellIcon}><i className="fas fa-arrow-up"></i></span>
              <span>{item.after}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeforeAfter;
