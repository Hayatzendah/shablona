import styles from './VideoSection.module.css';

function VideoSection() {
  return (
    <section className={styles.section}>
      <video
        className={styles.video}
        src="/videos/home-section-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}

export default VideoSection;
