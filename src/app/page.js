import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import StoriesCarousel from '../components/StoriesCarousel';
import Reviews from '../components/Reviews';
import Pricing from '../components/Pricing';
import BlogSection from '../components/BlogSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

import styles from './homepage.module.scss';
import MiddleBannerSection from '../components/MiddleBannerSection';

export default function Home() {
  return (
    <main className={styles.homepage}>
      <Hero />
      <Benefits />
      <MiddleBannerSection />
      <StoriesCarousel />
      <Reviews />
      <Pricing />
      <BlogSection />
      <FAQ />
      <Footer />
    </main>
  );
}
