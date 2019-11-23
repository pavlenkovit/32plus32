import React from 'react';
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

const Submenu = () => {
  return (
    <ul className={css.list}>
      {list.map((item, idx) => {
        return (
          <li key={idx} itemProp="itemListElement" className={css.item}>
            <Link key={idx} href="/category/[slug]" as={`/category/${item.slug}`}>
              <a className={css.link} property="item" typeof="WebPage">
                <span property="name">{item.title}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Submenu;
