import HeroSection from '../components/HeroSection/Hero';
import BenefitsSection from '../components/BenefitsSection/BenefitsSection';
import ReviewsSection from '../components/ReviewsSection/ReviewsSection';
import PricingSection from '../components/PricingSection/PricingSection';
import BlogSection from '../components/BlogSection/BlogSection';
import FAQSection from '../components/FAQSection/FAQ';
import Footer from '../components/Footer/Footer';

import styles from './homepage.module.scss';
import MiddleBannerSection from '../components/MiddleBannerSection/MiddleBannerSection';
import Navbar from '../components/Header/Navbar';
import BreathingWidget from '../components/BreathingWidget/BreathingWidget';
import AmbientMixer from '../components/AmbientMixer/AmbientMixer';
import MoodTracker from '@/components/MoodTracker/MoodTracker';

export default function Home() {
  return (
    <main className={styles.homepage}>
      <Navbar theme="transparent" />
      <HeroSection />
      <BreathingWidget />
      <AmbientMixer />
      <BenefitsSection />
      <MiddleBannerSection />
      <ReviewsSection />
      <PricingSection />
      <BlogSection />
      <FAQSection />
      <Footer />
      <MoodTracker />
    </main>
  );
}
