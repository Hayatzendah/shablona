import styles from './Map.module.css';

function Map() {
  return (
    <div className={styles.mapContainer}>
      <iframe
        className={styles.mapFrame}
        src="https://maps.google.com/maps?q=30.038,31.212&z=15&output=embed"
        title="موقع شبلونة - الدقي، الجيزة"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

export default Map;
