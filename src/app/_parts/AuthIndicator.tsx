import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export const AuthIndicator = () => (
  <div>
    <SignedOut>
      <SignInButton />
    </SignedOut>

    <SignedIn>
      <UserButton />
    </SignedIn>
  </div>
);
