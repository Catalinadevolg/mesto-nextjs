import type { Metadata } from 'next';
import '@/styles/main.scss';
import { Header } from '@/widgets';
import { TT_Norms } from './fonts';

export const metadata: Metadata = {
  title: 'Mesto',
  description: 'NextJs Project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={TT_Norms.className}>
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
