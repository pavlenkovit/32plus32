import React from 'react';
import Link from 'next/link';

import Styled from './Submenu.styled';

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
    <Styled.List>
      {list.map((item) => {
        return (
          <Styled.Item key={item.slug} itemProp="itemListElement">
            <Link href="/category/[slug]" as={`/category/${item.slug}`}>
              <Styled.Link property="item" typeof="WebPage">
                <span property="name">{item.title}</span>
              </Styled.Link>
            </Link>
          </Styled.Item>
        );
      })}
    </Styled.List>
  );
};

export default Submenu;
