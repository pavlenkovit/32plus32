import React, { PureComponent } from 'react';
import css from './Submenu.module.scss';
import Link from 'next/link';

const list = [
  {
    title: 'Научные статьи',
    slug: 'nauchnye-stati',
  },
  {
    title: 'Планирование',
    slug: 'planirovanie-trenirovok',
  },
  {
    title: 'Упражнения',
    slug: 'upragneniya',
  },
  {
    title: 'Техника',
    slug: 'tehnika',
  },
  {
    title: 'Тренинг',
    slug: 'trenirovki',
  },
  {
    title: 'Восстановление',
    slug: 'vosstanovlenie',
  },
  {
    title: 'Личности',
    slug: 'lichnosti',
  },
];

class Submenu extends PureComponent {
  render() {
    return (
      <ul className={css.list}>
        {list.map((item, idx) => {
          return (
            <li itemProp="itemListElement" className={css.item}>
              <Link key={idx} href="/category/[slug]" as={`/category/${item.slug}`}>
                <a className={css.link}>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Submenu;
