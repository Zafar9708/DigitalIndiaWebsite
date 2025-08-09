import '../styles/globals.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// import HeaderNavbar from 'components/HeaderNavbar';

export const metadata = {
  title: 'Growthwayz - Official Website',
  description: 'Growthwayz - Helping businesses grow with innovative solutions.',
  keywords: 'Growthwayz, business growth, child development, services, solutions',
  robots: 'index, follow',
  openGraph: {
    title: 'Growthwayz - Official Website',
    description: 'Growthwayz - Helping businesses grow with innovative solutions.',
    url: 'https://growthwayz.com',
    siteName: 'Growthwayz',
    type: 'website',
    locale: 'en_US',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Brand Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Growthwayz",
              "url": "https://growthwayz.com",
              "logo": "https://growthwayz.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/YourPage",
                "https://www.linkedin.com/company/your-company"
              ]
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <Navbar />
        <main className="min-h-screen p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

