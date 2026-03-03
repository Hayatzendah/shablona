import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import VideoSection from '../../components/VideoSection/VideoSection';
import PainPoints from '../../components/PainPoints/PainPoints';
import StatsCounter from '../../components/StatsCounter/StatsCounter';
import BrandsPreview from '../../components/BrandsPreview/BrandsPreview';
import CTASection from '../../components/CTASection/CTASection';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <SEO
        title="شبلونة | حلول التوأمة الرقمية المتقدمة"
        description="شبلونة - شركة مصرية متخصصة في حلول التوأمة الرقمية المتقدمة. نحول البيانات المعقدة إلى رؤى واضحة للشركات والمصانع وصناع القرار."
      />
      <Hero />
      <VideoSection />
      <PainPoints />
      <StatsCounter />
      <BrandsPreview />
      <CTASection />
    </div>
  );
}

export default Home;
