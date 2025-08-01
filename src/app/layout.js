import '../styles/globals.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// import HeaderNavbar from 'components/HeaderNavbar';

export const metadata = {
  title: 'GrowthWayz - Child Development',
  description: 'Empowering children through developmental services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {/* <HeaderNavbar /> */}
        <main className="min-h-screen p-4">{children}</main>
     
        <Footer />
      </body>
    </html>
  );
}
