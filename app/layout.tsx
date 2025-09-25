import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/sonner';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Munuo Travels - Zanzibar Tourism & Swahili Language Learning',
  description: 'Discover the beauty of Zanzibar with Munuo Travels. Offering authentic tours, cultural experiences, and Swahili language learning for foreigners. Contact us: +255 755 688 091',
  keywords: 'Zanzibar tours, Swahili language learning, Stone Town tours, Zanzibar tourism, Tanzania travel, spice tours, beach excursions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <LanguageProvider>
          {children}
          <WhatsAppButton />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}