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
  modal: ReactNode;
}

export const App = ({ children, modal }: AppProps) => (
  <html lang="en" className="">
    <body
      className={`font-sans ${font} bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white`}
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

      <div className="grid h-screen grid-rows-[auto,1fr]">
        <TopNav />
        <main className="overflow-y-scroll">{children}</main>
      </div>

      {modal}
      <div id="modal-root" />
    </body>
  </html>
);
