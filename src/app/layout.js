import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Manas Pokley — Climate · Systems · Code',
  description:
    'Portfolio of Manas Pokley. Climate risk APIs, agricultural ML, sustainable finance research, and data-driven field work.',
  metadataBase: new URL('https://portfolio-next.vercel.app'),
  openGraph: {
    title: 'Manas Pokley — Climate · Systems · Code',
    description:
      'Climate risk APIs, agricultural ML, sustainable finance research, and data-driven field work.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${mono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
