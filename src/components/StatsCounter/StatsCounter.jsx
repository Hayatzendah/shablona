import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import homeData from '../../data/homeData';
import { fadeInUp, staggerContainer, viewportConfig } from '../../utils/motion';
import styles from './StatsCounter.module.css';

const stagger = staggerContainer(0.1);

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const isDecimal = value % 1 !== 0;

          function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;

            setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={styles.number}>
      {count}
      {suffix && <span className={styles.suffix}>{suffix}</span>}
    </span>
  );
}

function StatsCounter() {
  const { title, items } = homeData.stats;

  return (
    <section className={styles.stats}>
      <div className={styles.bgOverlay}></div>
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
        <motion.div
          className={styles.grid}
          {...stagger}
          whileInView="animate"
          initial="initial"
          viewport={viewportConfig}
        >
          {items.map((item, index) => (
            <motion.div key={index} className={styles.statItem} variants={fadeInUp}>
              <AnimatedNumber value={item.value} suffix={item.suffix} />
              <p className={styles.label}>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default StatsCounter;
