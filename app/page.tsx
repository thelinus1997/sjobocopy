import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GridSection from './components/GridSection';
import TextImageSection from './components/TextImageSection';
import ReviewCarousel from './components/ReviewCarousel';
import ContactSection from './components/ContactSection';
import InstagramGrid from './components/InstagramGrid';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header with text and 2 buttons */}
      <Header />
      
      {/* Full screen hero with image, text and buttons on right (Z-axis overlay) */}
      <HeroSection />
      
      {/* 3x2 Grid section with 5 items */}
      <GridSection />
      
      {/* Article section - image left, text right */}
      <TextImageSection />
      
      {/* Review carousel section (top) */}
      <ReviewCarousel />
      
      {/* Contact section (bottom) - image left, contact info right */}
      <ContactSection />
      
      {/* Instagram grid - 3x4 centered, 1/3 width */}
      <InstagramGrid />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
