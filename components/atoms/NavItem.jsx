import classNames from 'classnames';
import Link from 'next/link';

export const NavItem = ({ name, href = '/#', active = false, icon = '' }) => {
  const className = classNames('nav-link', { active });

  return (
    <li className="nav-item">
      <Link href={href} className={className}>
        <i className={'nav-icon ' + icon}></i>
        <p>{name}</p>
      </Link>
    </li>
  );
};
