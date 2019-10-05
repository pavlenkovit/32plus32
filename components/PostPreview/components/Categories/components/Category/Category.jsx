import React from 'react';
import css from './Category.module.scss';
import Link from 'next/link';

const Category = ({ name, slug }) => {
  const href = `/category/[slug]`;
  const as = `/category/${slug}`;

  return (
    <Link href={href} as={as}>
      <a className={css.link}>{name}</a>
    </Link>
  );
};

export default Category;
