import {
  HeroSection,
  SectorsSection,
  CTABookingSection,
  AboutSection,
  CTAVisitSection,
  HistorySection,
  GallerySection,
  InfoSection,
  NewsSection,
  CollaborationSection,
  YoutubeEmbedSection,
} from './Sections';

import './home.css';

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />

      <SectorsSection />

      <CTABookingSection />

      <AboutSection />

      <CTAVisitSection />

      <HistorySection />

      <GallerySection />

      <InfoSection />

      <YoutubeEmbedSection />

      <NewsSection />

      <CollaborationSection />
    </div>
  );
}

export default HomePage;
