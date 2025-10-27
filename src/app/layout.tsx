import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito'
});

export const metadata: Metadata = {
  title: 'Why Y Matters',
  description: 'A playful exploration of the letter Y and its many roles.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
