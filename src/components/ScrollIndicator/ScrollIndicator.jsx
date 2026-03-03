import { useState, useEffect, useCallback } from 'react';
import styles from './ScrollIndicator.module.css';

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = useCallback(() => {
    window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
  }, []);

  return (
    <button
      className={`${styles.indicator} ${visible ? '' : styles.hidden}`}
      onClick={handleClick}
      aria-label="اسحب لأسفل لمشاهدة المزيد"
    >
      <span className={styles.mouse}>
        <span className={styles.wheel}></span>
      </span>
      <i className={`fas fa-chevron-down ${styles.arrow}`}></i>
    </button>
  );
}

export default ScrollIndicator;
