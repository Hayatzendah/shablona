import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { accordionContent } from '../../utils/motion';
import styles from './Accordion.module.css';

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div key={index} className={`${styles.item} ${isOpen ? styles.active : ''}`}>
            <button
              className={styles.question}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className={styles.questionText}>{item.question}</span>
              <motion.span
                className={styles.icon}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className={styles.answerWrapper}
                  initial={accordionContent.initial}
                  animate={accordionContent.animate}
                  exit={accordionContent.exit}
                >
                  <div className={styles.answer}>
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
