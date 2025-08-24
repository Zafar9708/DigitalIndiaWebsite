import ContactHero from 'components/ContactHero';
import ContactInfo from 'components/ContactInfo';
import ContactForm from 'components/ContactForm';
import LiveMap from 'components/LiveMap';
import FAQSection from 'components/FAQSection';

export const metadata = {
  title: 'Contact Us - Digital India Tech Solutions',
  description: 'Get in touch with our expert team for computer repair services. Visit our location, call us, or send a message for quick assistance.',
};

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <ContactInfo />
            <ContactForm />
          </div>
          <div className="space-y-12">
            <LiveMap />
            <FAQSection />
          </div>
        </div>
      </div>
    </main>
  );
}