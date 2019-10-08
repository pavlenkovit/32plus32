import React, { PureComponent } from 'react';
import Link from 'next/link';
import menu from './constants/nav';

import css from './Nav.module.scss';
import ArrowIcon from '../../../../../../icons/ArrowIcon';
import Submenu from './components/Submenu';

class Nav extends PureComponent {
  render() {
    return (
      <nav className={css.container}>
        <ul className={css.menu}>
          {menu.map((item, idx) => (
            <li key={idx} className={css.item}>
              <Link href={item.href} as={item.as}>
                <a className={css.link}>
                  <span>{item.title}</span>
                  {item.arrow && (
                    <ArrowIcon className={css.icon} color="#fff" size={12} />
                  )}
                </a>
              </Link>
              {item.arrow && (
                <Submenu />
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
