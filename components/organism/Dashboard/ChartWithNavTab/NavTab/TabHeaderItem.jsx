import classNames from 'classnames';
import React from 'react';

const TabHeaderItem = ({ content, tab, active, onTabClick }) => {
  const classActive = classNames('nav-link', { active });
  return (
    <li className="nav-item" onClick={() => onTabClick(tab)}>
      <a className={classActive} id={'custom-tabs-two-' + tab + '-tab'} data-toggle="pill" href={'#custom-tabs-two-' + tab} role="tab" aria-controls={'custom-tabs-two-' + tab} aria-selected={active ? 'true' : 'false'}>
        {content}
      </a>
    </li>
  );
};

export default TabHeaderItem;
