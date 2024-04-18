import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { Inter } from 'next/font/google';
import { extractRouterConfig } from 'uploadthing/server';

import { TopNav } from './TopNav';
import { ourFileRouter } from '../api/uploadthing/core';

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
      <NextSSRPlugin
        /**
         * The `extractRouterConfig` will extract **only** the route configs
         * from the router to prevent additional information from being
         * leaked to the client. The data passed to the client is the same
         * as if you were to fetch `/api/uploadthing` directly.
         */
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <TopNav />
      {children}
    </body>
  </html>
);
