import { Inter } from 'next/font/google';

import { TopNav } from './TopNav';

import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const { variable: font } = inter;

interface AppProps {
  children: ReactNode;
}

export const App = ({ children }: AppProps) => (
  <html lang="en">
    <body
      className={`font-sans ${font} flex flex-col gap-4 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white`}
    >
      <TopNav />
      {children}
    </body>
  </html>
);
