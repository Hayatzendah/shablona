import { useState, useEffect, useRef } from 'react';
import SEO from '../../components/SEO/SEO';
import ProcessSteps from '../../components/ProcessSteps/ProcessSteps';
import BeforeAfter from '../../components/BeforeAfter/BeforeAfter';
import digitalTwinData from '../../data/digitalTwinData';
import styles from './DigitalTwin.module.css';

function AnimatedStat({ value, suffix, description }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const isRange = value.includes('-');
          if (isRange) {
            setDisplay(value);
            return;
          }
          const target = parseFloat(value);
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;

            if (Number.isInteger(target)) {
              setDisplay(Math.round(current).toString());
            } else {
              setDisplay(current.toFixed(target % 1 !== 0 ? 2 : 0));
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplay(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div className={styles.statCard} ref={ref}>
      <div className={styles.statValue}>
        {display}<span className={styles.statSuffix}>{suffix}</span>
      </div>
      <p className={styles.statDesc}>{description}</p>
    </div>
  );
}

function DigitalTwin() {
  const { definition, processSteps, stats, beforeAfter, comparisonImage } = digitalTwinData;

  return (
    <>
      <SEO
        title="ما هو التوأم الرقمي؟ | شبلونة - حلول التوأمة الرقمية"
        description="تعرف على مفهوم التوأم الرقمي وكيف يحول عمليات المصانع والشركات. إحصائيات عالمية ومقارنة قبل وبعد التوأمة الرقمية."
        keywords="التوأم الرقمي، التوأمة الرقمية، IoT، ذكاء اصطناعي، مونت كارلو، شبلونة"
      />

      {/* Definition section */}
      <section className={styles.definitionSection}>
        <div className="container">
          <div className={styles.definitionGrid}>
            <div className={styles.definitionContent}>
              <h1 className={styles.definitionTitle}>{definition.title}</h1>
              <p className={styles.definitionText}>{definition.text}</p>
            </div>
            <div className={styles.definitionImage}>
              {definition.image ? (
                <img src={definition.image} alt="مفهوم التوأم الرقمي" className={styles.definitionImg} />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <i className="fas fa-network-wired"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process steps section */}
      <section className={styles.processSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>كيف يعمل التوأم الرقمي؟</h2>
          <p className={styles.sectionSubtitle}>أربع خطوات لتحويل عملياتك إلى نموذج رقمي متكامل</p>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Statistics section */}
      <section className={styles.statsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>إحصائيات عالمية</h2>
          <p className={styles.sectionSubtitle}>أرقام تؤكد التأثير الهائل للتوأمة الرقمية على مستوى العالم</p>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Before/After section */}
      <section className={styles.comparisonSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>قبل وبعد التوأم الرقمي</h2>
          <p className={styles.sectionSubtitle}>الفرق الحقيقي الذي يحدثه التوأم الرقمي في عمليات الشركات والمصانع</p>
          {comparisonImage && (
            <div className={styles.comparisonImageWrap}>
              <img src={comparisonImage} alt="مقارنة قبل وبعد التوأم الرقمي" className={styles.comparisonImage} />
            </div>
          )}
          <BeforeAfter items={beforeAfter} />
        </div>
      </section>

      {/* CTA section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>هل أنت مستعد للتحول الرقمي؟</h2>
            <p className={styles.ctaText}>ابدأ رحلتك مع التوأمة الرقمية اليوم واكتشف كيف يمكن لشبلونة تحويل عملياتك</p>
            <div className={styles.ctaButtons}>
              <a
                href="https://wa.me/201090448295"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                <i className="fab fa-whatsapp"></i>
                تواصل معنا
              </a>
              <a href="https://shabllona.org" target="_blank" rel="noopener noreferrer" className={styles.ctaBtnOutline}>
                <i className="fas fa-box-open"></i>
                استعرض المنتجات
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DigitalTwin;
