// import AboutHero from '@/components/AboutHero';
// import OurStory from '@/components/OurStory';
import AboutHero from 'components/AboutHero';
import OurStory from 'components/OurStory';
import Values from 'components/Values';
import Achievement from 'components/Achievement';

export const metadata = {
  title: 'About Us - Digital India Tech Solutions',
  description: 'Learn about our journey, values, and the expert team behind Digital India Tech Solutions - your trusted computer repair partner.',
};

export default function About() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <Values />
      {/* <TeamSection /> */}
      <Achievement />
      {/* <CTASection /> */}
    </main>
  );
}