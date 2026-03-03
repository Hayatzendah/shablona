import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import homeData from '../../data/homeData';
import { staggerContainer, heroContent } from '../../utils/motion';
import styles from './Hero.module.css';

const stagger = staggerContainer(0.15);

function Hero() {
  const { title, subtitle, description, primaryBtn, secondaryBtn } =
    homeData.hero;

  return (
    <section className={styles.hero}>
      <div className={styles.bgOverlay}></div>
      <div className={styles.shapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
        <div className={`${styles.shape} ${styles.shape4}`}></div>
        <div className={`${styles.shape} ${styles.shape5}`}></div>
      </div>
      <motion.div
        className={styles.content}
        {...stagger}
      >
        <motion.h1
          className={styles.title}
          variants={heroContent}
          custom={0.1}
        >
          {title}
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          variants={heroContent}
          custom={0.2}
        >
          {subtitle}
        </motion.p>
        <motion.p
          className={styles.description}
          variants={heroContent}
          custom={0.3}
        >
          {description}
        </motion.p>
        <motion.div
          className={styles.buttons}
          variants={heroContent}
          custom={0.4}
        >
          <Link to={primaryBtn.link} className={styles.primaryBtn}>
            {primaryBtn.text}
          </Link>
          <Link to={secondaryBtn.link} className={styles.secondaryBtn}>
            {secondaryBtn.text}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
