import React, { PureComponent } from 'react';
import Link from 'next/link';

import css from './Nav.module.scss';

const menu = [
  {
    href: '/',
    title: 'Статьи',
  },
  {
    href: '/trainings',
    title: 'Тренировки',
  },
  {
    href: '/',
    title: 'Нормативы',
  },
  {
    href: '/',
    title: 'Контакты',
  },
];

class Nav extends PureComponent {
  render() {
    return (
      <nav className={css.container}>
        <ul className={css.menu}>
          {menu.map((item, idx) => (
            <li key={idx} className={css.item}>
              <Link href={item.href}>
                <a className={css.link}>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
