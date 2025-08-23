// import '../styles/globals.css';
// // import Header from '../components/Header';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// // import HeaderNavbar from 'components/HeaderNavbar';

// export const metadata = {
//   title: 'Altabb - Official Website',
//   description: 'Growthwayz - Helping businesses grow with innovative solutions.',
//   keywords: 'Growthwayz, business growth, child development, services, solutions',
//   robots: 'index, follow',
//   openGraph: {
//     title: 'Altabb - Official Website',
//     description: 'Growthwayz - Helping businesses grow with innovative solutions.',
//     url: 'https://growthwayz.com',
//     siteName: 'Growthwayz',
//     type: 'website',
//     locale: 'en_US',
//   },
// };


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Brand Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               "name": "Growthwayz",
//               "url": "https://growthwayz.com",
//               "logo": "https://growthwayz.com/logo.png",
//               "sameAs": [
//                 "https://www.facebook.com/YourPage",
//                 "https://www.linkedin.com/company/your-company"
//               ]
//             }),
//           }}
//         />
//       </head>
//       <body>
//         {/* <Header /> */}
//         <Navbar />
//         <main className="min-h-screen p-4">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }



import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Atlabb - Professional Accounting Solutions',
  description: 'Atlabb Accounting provides comprehensive financial services including bookkeeping, tax preparation, financial consulting, and strategic business advisory.',
  keywords: 'Atlabb, accounting services, bookkeeping, tax preparation, financial consulting, business advisory',
  robots: 'index, follow',
  openGraph: {
    title: 'Atlabb - Professional Accounting Solutions',
    description: 'Expert accounting services for businesses of all sizes',
    url: 'https://atlabb-accounting.com',
    siteName: 'Atlabb Accounting',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hide-scrollbar">
      <head>
        {/* Brand Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Atlabb Accounting",
              "url": "https://atlabb-accounting.com",
              "logo": "https://atlabb-accounting.com/logo.png",
              "description": "Professional accounting services for businesses",
              "sameAs": [
                "https://www.facebook.com/atlabb",
                "https://www.linkedin.com/company/atlabb"
              ]
            }),
          }}
        />
      </head>
      <body className="hide-scrollbar">
        <Navbar />
        <main className="min-h-screen full-width-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}