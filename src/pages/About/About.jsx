import SEO from '../../components/SEO/SEO';
import Philosophy from '../../components/Philosophy/Philosophy';
import TeamSection from '../../components/TeamSection/TeamSection';
import aboutData from '../../data/aboutData';
import styles from './About.module.css';

function About() {
  const { story, identity, fibonacci, activity, capabilities } = aboutData;

  return (
    <div className={styles.about}>
      <SEO
        title="من نحن | شبلونة - قصتنا وفلسفتنا"
        description="تعرف على شركة شبلونة وقصة تأسيسها وفلسفة الأجسام الأفلاطونية الخمسة وحلزون فيبوناتشي الذي يربط براندات شبلونة ببعضها."
      />

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h1 className={styles.sectionTitle}>{story.title}</h1>
              {story.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.storyParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className={styles.storyImage}>
              <img
                src={story.image}
                alt="قصة تأسيس شبلونة"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className={styles.identitySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{identity.title}</h2>
          <div className={styles.identityGrid}>
            {identity.cards.map((card, index) => (
              <div key={index} className={styles.identityCard}>
                <div className={styles.identityIcon}>
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <h3 className={styles.identityCardTitle}>{card.title}</h3>
                <p className={styles.identityCardText}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fibonacci Section */}
      <section className={styles.fibonacciSection}>
        <div className={styles.container}>
          <div className={styles.fibonacciGrid}>
            <div className={styles.fibonacciImage}>
              <img
                src={fibonacci.image}
                alt="حلزون فيبوناتشي - النسبة الذهبية"
                className={styles.image}
              />
            </div>
            <div className={styles.fibonacciContent}>
              <h2 className={styles.sectionTitle}>{fibonacci.title}</h2>
              <p className={styles.fibonacciText}>{fibonacci.text}</p>
              <div className={styles.goldenRatio}>
                <span className={styles.phi}>&phi;</span>
                <span className={styles.phiValue}>= 1.618...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platonic Solids / Philosophy */}
      <Philosophy />

      {/* Activity Section */}
      <section className={styles.activitySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{activity.title}</h2>
          <div className={styles.activityBox}>
            <div className={styles.activityIcon}>
              <i className="fas fa-building"></i>
            </div>
            <p className={styles.activityText}>{activity.text}</p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={styles.capabilitiesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{capabilities.title}</h2>
          <div className={styles.teamList}>
            {capabilities.teamDescription.map((item, index) => (
              <div key={index} className={styles.teamItem}>
                <i className="fas fa-check-circle"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className={styles.capGrid}>
            {capabilities.cards.map((card, index) => (
              <div key={index} className={styles.capCard}>
                <div className={styles.capIcon}>
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <h3 className={styles.capCardTitle}>{card.title}</h3>
                <p className={styles.capCardText}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
}

export default About;
