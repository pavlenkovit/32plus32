import React from 'react';
import css from './Category.module.scss';
import Link from 'next/link';

const Category = (props) => {
  const { name, slug } = props;

  const href = `/category?slug=${slug}`;
  const as = `/category/${slug}`;

  return (
    <li className={css.item}>
      <Link href={href} as={as}>
        <a className={css.link}>{name}</a>
      </Link>
    </li>
  );
};

export default Category;
