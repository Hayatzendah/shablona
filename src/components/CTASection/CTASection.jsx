import { motion } from 'framer-motion';
import homeData from '../../data/homeData';
import { fadeInUp, viewportConfig } from '../../utils/motion';
import styles from './CTASection.module.css';

function CTASection() {
  const { text, subtext, btnText, btnLink } = homeData.cta;

  return (
    <section className={styles.cta}>
      <div className={styles.bgOverlay}></div>
      <motion.div
        className={styles.container}
        {...fadeInUp}
        whileInView="animate"
        initial="initial"
        viewport={viewportConfig}
        variants={{ initial: fadeInUp.initial, animate: fadeInUp.animate }}
      >
        <h2 className={styles.text}>{text}</h2>
        <p className={styles.subtext}>{subtext}</p>
        <a
          href={btnLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappBtn}
        >
          <i className="fab fa-whatsapp"></i>
          <span>{btnText}</span>
        </a>
      </motion.div>
    </section>
  );
}

export default CTASection;
