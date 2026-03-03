import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SplashScreen.module.css';

const shapes = [
  { name: 'Tetrahedron' },
  { name: 'Octahedron' },
  { name: 'Cube' },
  { name: 'Icosahedron' },
  { name: 'Dodecahedron' },
];

export default function SplashScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const glowTimer = setTimeout(() => setShowGlow(true), 800);
    const exitTimer = setTimeout(() => setVisible(false), 2800);
    return () => {
      clearTimeout(glowTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className={styles.overlay}
          aria-hidden="true"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className={styles.logoContainer}>
            {/* Orbiting shapes */}
            <div className={styles.shapesOrbit}>
              {shapes.map((s) => (
                <div key={s.name} className={styles.shape} />
              ))}
            </div>

            {/* Glow ring */}
            {showGlow && <div className={styles.glowRing} />}

            {/* Logo */}
            <motion.img
              src="/images/logo/shabllona-logo.jpg"
              alt=""
              className={styles.logo}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
            />
          </div>

          {/* Company name */}
          <motion.div
            className={styles.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.4, ease: 'easeOut' }}
          >
            شبلونة
          </motion.div>

          {/* Tagline */}
          <motion.div
            className={styles.tagline}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.4, ease: 'easeOut' }}
          >
            The Shape of Things to Come
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
