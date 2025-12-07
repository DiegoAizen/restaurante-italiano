import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Trattoria Bella Vista | Auténtica Cocina Italiana',
  description: 'Descubre la auténtica cocina italiana en un ambiente acogedor y familiar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className} ${playfair.variable}`}>
      <body className="min-h-screen bg-light">
        {children}
      </body>
    </html>
  );
}