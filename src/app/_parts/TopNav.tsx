import { AuthIndicator } from './AuthIndicator';
import { LogoAndNav } from './LogoAndNav';

export const TopNav = () => (
  <div className="flex w-full items-center justify-between gap-8 border-b px-5 py-2">
    <LogoAndNav />

    <AuthIndicator />
  </div>
);
