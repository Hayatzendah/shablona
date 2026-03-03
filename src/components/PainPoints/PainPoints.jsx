import { motion } from 'framer-motion';
import homeData from '../../data/homeData';
import { fadeInUp, scaleIn, staggerContainer, viewportConfig } from '../../utils/motion';
import styles from './PainPoints.module.css';

const stagger = staggerContainer(0.1);

function PainPoints() {
  const { title, cards, solution } = homeData.painPoints;

  return (
    <section className={styles.painPoints}>
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
          {cards.map((card, index) => (
            <motion.div key={index} className={styles.card} variants={fadeInUp}>
              <div className={styles.iconWrapper}>
                <i className={`fas ${card.icon}`}></i>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className={styles.solutionBox}
          {...scaleIn}
          whileInView="animate"
          initial="initial"
          viewport={viewportConfig}
          variants={{ initial: scaleIn.initial, animate: scaleIn.animate }}
        >
          <div className={styles.solutionIcon}>
            <i className="fas fa-lightbulb"></i>
          </div>
          <p className={styles.solutionText}>{solution}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default PainPoints;
