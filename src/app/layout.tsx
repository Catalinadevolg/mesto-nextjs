import type { Metadata } from 'next';
import '@/styles/main.scss';

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
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
