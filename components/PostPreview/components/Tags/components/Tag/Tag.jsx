import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import css from './Tag.module.scss';

const Tag = (props) => {
  const { name, slug } = props;
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

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Tag;
