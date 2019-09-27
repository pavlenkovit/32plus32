import React from 'react';
import css from './PageLink.module.scss';
import cn from 'classnames';
import Link from 'next/link';

const PageLink = ({ children, href, as, isActive }) => {
  return (
    <div className={cn(css.item, { [css.itemActive]: isActive })}>
      {isActive ? (
        <div className={css.link}>{children}</div>
      ) : (
        <Link href={href} as={as}>
          <a className={css.link}>{children}</a>
        </Link>
      )}
    </div>
  );
};

export default PageLink;
