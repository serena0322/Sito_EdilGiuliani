import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CookieBanner from '@/components/CookieBanner';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
