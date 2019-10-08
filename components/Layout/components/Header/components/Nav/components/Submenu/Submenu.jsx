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
      <div className={css.container}>
        <div className={css.list}>
          {list.map(item => {
            return (
              <Link href="/category/[slug]" as={`/category/${item.slug}`}>
                <a className={css.link}>{item.title}</a>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Submenu;
