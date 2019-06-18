import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container } from 'react-grid-system';

import css from './Nav.module.scss';

const menu = [
  {
    href: '/',
    title: 'Главная',
  },
  {
    href: '/',
    title: 'Все статьи',
  },
  {
    href: '/',
    title: 'Тренировки',
  },
  {
    href: '/',
    title: 'Нормативы',
  },
  {
    href: '/',
    title: 'Стать автором',
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
        <Container>
          <ul className={css.menu}>
            {menu.map((item, idx) => (
              <li key={idx} className={css.item}>
                <Link href={item.href}>
                  <a className={css.link}>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    );
  }
}

Nav.propTypes = {
};

export default Nav;
