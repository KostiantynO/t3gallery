import Link from 'next/link';

import type { ReactNode } from 'react';

interface NavLinkProps {
  children: ReactNode;
  href: string;
}

export const NavLink = ({ ...props }: NavLinkProps) => (
  <Link className="px-2 py-3" {...props} />
);
