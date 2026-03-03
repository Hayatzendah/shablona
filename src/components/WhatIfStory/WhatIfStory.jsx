import styles from './WhatIfStory.module.css';

function WhatIfStory({ title, story, image, color }) {
  return (
    <div className={styles.wrapper} style={{ '--brand-color': color }}>
      <div className={styles.header}>
        <i className="fas fa-lightbulb"></i>
        <h3 className={styles.sectionTitle}>قصة النجاح</h3>
      </div>

      {image && (
        <div className={styles.imageWrap}>
          <img src={image} alt="" className={styles.storyImage} />
        </div>
      )}

      <blockquote className={styles.blockquote}>
        <div className={styles.quoteIcon}>
          <i className="fas fa-quote-right"></i>
        </div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.story}>{story}</p>
      </blockquote>
    </div>
  );
}

export default WhatIfStory;
