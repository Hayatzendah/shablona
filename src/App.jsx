import React, { Suspense, useEffect, useState, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import PageWrapper from './components/PageWrapper/PageWrapper';
import SplashScreen from './components/SplashScreen/SplashScreen';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Brands = lazy(() => import('./pages/Brands/Brands'));
const BrandDetail = lazy(() => import('./pages/Brands/BrandDetail'));
const DigitalTwin = lazy(() => import('./pages/DigitalTwin/DigitalTwin'));
const FAQ = lazy(() => import('./pages/FAQ/FAQ'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LoadingFallback() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      color: 'var(--primary-gold)',
      fontSize: '1.2rem',
      fontFamily: 'Tajawal, sans-serif',
    }}>
      <div style={{ textAlign: 'center' }}>
        <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}></i>
        جاري التحميل...
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem('shabllona_splash_seen')
  );

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('shabllona_splash_seen', 'true');
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/brands" element={<PageWrapper><Brands /></PageWrapper>} />
              <Route path="/brands/:brandSlug" element={<PageWrapper><BrandDetail /></PageWrapper>} />
              <Route path="/digital-twin" element={<PageWrapper><DigitalTwin /></PageWrapper>} />
              <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
