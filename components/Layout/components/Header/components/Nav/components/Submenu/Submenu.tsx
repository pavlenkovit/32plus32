import React from 'react';
import Link from 'next/link';

import { List, Item, LinkElement } from './Submenu.styled';

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
    <List>
      {list.map((item) => {
        return (
          <Item key={item.slug} itemProp="itemListElement">
            <Link href="/category/[slug]" as={`/category/${item.slug}`}>
              <LinkElement property="item" typeof="WebPage">
                <span property="name">{item.title}</span>
              </LinkElement>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

export default Submenu;
