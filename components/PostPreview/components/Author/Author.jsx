import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import css from './Author.module.scss';

const Author = (props) => {
  const { name, slug, children } = props;
  const href = `/author?slug=${slug}`;
  const as = `/author/${slug}`;

  return (
    <a className={css.container}>
      <Link href={href} as={as}>
        <a className={css.imgLink}>
          <img className={css.img} src="/static/img/author.png"/>
        </a>
      </Link>
      <div>
        <Link href={href} as={as}>
          <a className={css.name}>{name}</a>
        </Link>
        {children}
      </div>
    </a>
  );
};

Author.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Author;
