import { NavLink } from './NavLink';

export const Nav = () => (
  <nav className="flex w-full items-center justify-between text-xl font-semibold">
    <ul>
      <li>
        <NavLink href="/gallery">Gallery</NavLink>
      </li>
    </ul>
  </nav>
);
