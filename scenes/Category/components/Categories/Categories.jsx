import React from 'react';
import cn from 'classnames';
import css from './Categories.module.scss';
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

const Categories = ({ activeSlug }) => {
  return (
    <div className={css.list}>
      {list.map(item => {
        const paramsLink = {
            href: `/category?slug=${item.slug}`,
            as: `/category/${item.slug}`,
        };
        return (
          <div className={cn(css.item, { [css.itemActive]: activeSlug === item.slug })}>
            <Link {...paramsLink}>
              <a>{item.title}</a>
            </Link>
          </div>
        )
      })}
    </div>
  );
};

export default Categories;
