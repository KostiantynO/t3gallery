'use client';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

import { SimpleUploadButton } from './SimpleUploadButton';

export const AuthIndicator = () => (
  <div className="flex items-center gap-4">
    <SignedOut>
      <SignInButton />
    </SignedOut>

    <SignedIn>
      <SimpleUploadButton />

      <div className="min-w-7">
        <UserButton />
      </div>
    </SignedIn>
  </div>
);
