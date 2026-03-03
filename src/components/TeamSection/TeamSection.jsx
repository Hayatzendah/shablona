import aboutData from '../../data/aboutData';
import styles from './TeamSection.module.css';

function TeamSection() {
  const { image, title, founder, categories } = aboutData.team;

  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {image && (
          <div className={styles.teamImageWrapper}>
            <img src={image} alt="فريق شبلونة" className={styles.teamImage} />
          </div>
        )}
        <div className={styles.founderCard}>
          <div className={styles.founderIcon}>
            <i className="fas fa-user-tie"></i>
          </div>
          <div className={styles.founderInfo}>
            <h3 className={styles.founderName}>{founder.name}</h3>
            <p className={styles.founderRole}>{founder.role}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>
                <i className={`fas ${cat.icon}`}></i>
              </div>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <p className={styles.cardDesc}>{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
