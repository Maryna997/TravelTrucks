import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import Logo from '/assets/TravelLogo.svg';

import css from './Header.module.css';

const buildLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(css.link, isActive && css.active);

const Header: React.FC = () => {
  return (
    <div className={css.header}>
      <Link to='/'>
        <img src={Logo} alt='Logo' className={css.logoIcon} />
      </Link>
      <nav className={css.navList}>
        <NavLink to='/' className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to='/campers' className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
