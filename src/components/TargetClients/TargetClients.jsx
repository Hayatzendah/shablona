import styles from './TargetClients.module.css';

function TargetClients({ clients, color }) {
  return (
    <div className={styles.wrapper} style={{ '--brand-color': color }}>
      <div className={styles.header}>
        <i className="fas fa-users"></i>
        <h3 className={styles.sectionTitle}>العملاء المستهدفون</h3>
      </div>

      <ul className={styles.list}>
        {clients.map((client, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.bullet}>
              <i className="fas fa-check-circle"></i>
            </span>
            <span className={styles.text}>{client}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TargetClients;
