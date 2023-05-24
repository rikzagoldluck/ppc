import classNames from 'classnames';
import Link from 'next/link';
import { NavItem } from '../../atoms/NavItem';

const Menu = ({ name, href = '/#', active = false, icon = '', treeview = [], menuOpen = false }) => {
  const classNameNavLink = classNames('nav-link', { active });
  const classNameNavItem = classNames('nav-item', { 'menu-open': menuOpen });
  return (
    <li className={classNameNavItem}>
      <Link href={href} className={classNameNavLink}>
        <i className={'nav-icon ' + icon}></i>
        <p>
          {name}
          {treeview.length > 0 && <i className="right fas fa-angle-left"></i>}
        </p>
      </Link>
      {treeview.length > 0 && (
        <ul className="nav nav-treeview">
          {treeview.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Menu;
