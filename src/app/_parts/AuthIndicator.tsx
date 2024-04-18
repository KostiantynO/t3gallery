'use client';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { UploadButton } from '~/parts/uploadthing';

export const AuthIndicator = () => {
  const router = useRouter();

  const onUploadDone = useCallback(() => {
    router.refresh();
  }, [router]);

  return (
    <div className="flex">
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={onUploadDone}
        />

        <div className="min-w-7">
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
};
