import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportConfig } from '../../utils/motion';
import styles from './ProcessSteps.module.css';

const stagger = staggerContainer(0.15);

function ProcessSteps({ steps }) {
  return (
    <motion.div
      className={styles.wrapper}
      {...stagger}
      whileInView="animate"
      initial="initial"
      viewport={viewportConfig}
    >
      {steps.map((step, index) => (
        <motion.div
          key={step.step}
          className={styles.stepItem}
          variants={fadeInUp}
        >
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>{step.step}</div>
            <div className={styles.iconCircle}>
              <i className={`fas ${step.icon}`}></i>
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.description}</p>
          </div>
          {index < steps.length - 1 && (
            <div className={styles.connector}>
              <i className="fas fa-chevron-left"></i>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProcessSteps;
