import HeroSection from '../components/Hero';
import BenefitsSection from '../components/BenefitsSection';
import ReviewsSection from '../components/ReviewsSection/ReviewsSection';
import PricingSection from '../components/Pricing';
import BlogSection from '../components/BlogSection/BlogSection';
import FAQSection from '../components/FAQSection/FAQ';
import Footer from '../components/Footer';

import styles from './homepage.module.scss';
import MiddleBannerSection from '../components/MiddleBannerSection';

export default function Home() {
  return (
    <main className={styles.homepage}>
      <HeroSection />
      <BenefitsSection />
      <MiddleBannerSection />
      <ReviewsSection />
      <PricingSection />
      <BlogSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
