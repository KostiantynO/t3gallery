import { Logo } from './Logo';
import { Nav } from './Nav';
import { NavLink } from './NavLink';

export const LogoAndNav = () => (
  <div className="flex items-center gap-2">
    <NavLink href="/">
      <Logo />
    </NavLink>

    <Nav />
  </div>
);
