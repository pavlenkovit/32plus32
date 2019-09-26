import React from 'react';
import Link from 'next/link';

import css from './Tag.module.scss';

const Tag = ({ name, slug }) => {
  const href = `/tag?slug=${slug}`;
  const as = `/tag/${slug}`;

  return (
    <li className={css.item}>
      <Link href={href} as={as}>
        <a className={css.link}>#{name}</a>
      </Link>
    </li>
  );
};

export default Tag;
