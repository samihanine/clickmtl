import './globals.css';
import './overlays.css';
import '../css/artist.css';

import Footer from '../_components/Footer';
import Head from 'next/head';
import type { Metadata } from 'next';
import Navbar from '../_components/Navbar';

export const metadata: Metadata = {
  title: 'CLICK MTL',
  description: 'Inspirer une vision jeune, créative et unique',
  icons: {
    icon: ['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <body>
        <Navbar />
        <main className=''>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
