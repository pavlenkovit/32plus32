import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import css from './Author.module.scss';
import { useSelector } from 'react-redux';

const Author = (props) => {
  const { name, slug } = props;
  const href = '/user/[slug]';
  const as = `/user/${slug}`;

  const { isMobile } = useSelector(state => state.app);

  return (
    <Link href={href} as={as}>
      <a className={cn(css.imgLink, { [css.mob]: isMobile })} itemProp="author" itemScope itemType="http://schema.org/Person">
        <img className={css.img} src={`/static/avatars/${slug}.jpg`} alt={name} itemProp="image" />
      </a>
    </Link>
  );
};

export default Author;
