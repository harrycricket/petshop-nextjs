import type { Metadata } from 'next';
import { Inter, Lusitana } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={lusitana.className}>
        <header>
          <div>Main header</div>
        </header>
        {children}
        <footer>Main footer</footer>
      </body>
    </html>
  );
}
