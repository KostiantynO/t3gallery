'use client';

import { captureException } from '@sentry/nextjs';
import Error from 'next/error';
import { useEffect } from 'react';

const checkStatusCode = (error: unknown): number =>
  typeof error === 'object' &&
  error &&
  'statusCode' in error &&
  error.statusCode &&
  typeof error.statusCode === 'number'
    ? error.statusCode
    : 500;

const GlobalError = ({ error }: { error: unknown }) => {
  useEffect(() => {
    captureException(error);
  }, [error]);

  const code = checkStatusCode(error);

  return (
    <html>
      <body>
        <Error statusCode={code} withDarkMode title='Error' />
      </body>
    </html>
  );
};

export default GlobalError;
