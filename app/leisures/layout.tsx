import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leisure Home',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
