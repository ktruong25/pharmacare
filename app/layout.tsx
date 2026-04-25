import type { Metadata } from 'next';
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['600', '700'],
  style: ['normal', 'italic'],
});
const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  weight: ['600', '700'],
});

export const metadata: Metadata = {
  title: 'PharmaCare Rx – Your Pharmacy Needs Made Easy | Fountain Valley, CA',
  description:
    'PharmaCare Rx in Fountain Valley, CA. Free delivery, automatic refills, walk-in COVID testing, vaccines, and personalized pharmacy care. Call 714.531.1755.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}>
      <body>{children}</body>
    </html>
  );
}
