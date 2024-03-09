import type { Metadata } from 'next';
import '@/styles/main.scss';
import { Footer, Header } from '@/widgets';
import styles from '@/styles/layout.module.scss';
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
        <div className={styles.root}>
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
