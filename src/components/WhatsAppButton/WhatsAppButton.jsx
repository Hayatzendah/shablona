import { motion } from 'framer-motion';
import styles from './WhatsAppButton.module.css';

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/201090448295"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="تواصل معنا عبر واتساب"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fab fa-whatsapp"></i>
    </motion.a>
  );
}

export default WhatsAppButton;
