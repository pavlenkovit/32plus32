import React from 'react';
import css from './Pagination.module.scss';
import PageLink from './components/PageLink';
import Button from './components/Button';

const Pagination = ({ total, rootAs, rootHref, activePage }) => {
  if (total === 1) {
    return null;
  }

  const pages = new Array(total).fill(0);

  const hrefPath = (page) => {
    if (rootHref === '/') {
      return `/?page=${page}`;
    }
    return `${rootHref}&page=${page}`;
  };

  const asPath = (page) => {
    if (rootHref === '/') {
      return `/?page=${page}`;
    }
    return `${rootAs}/${page}`;
  };

  return (
    <div className={css.container}>
      {activePage > 1 && (
        <Button
          href={hrefPath(activePage - 1)}
          as={asPath(activePage - 1)}
        >
          Назад
        </Button>
      )}
      <div className={css.list}>
        {pages.map((val, idx) => {
          const page = idx + 1;
          return (
            <PageLink
              href={hrefPath(page)}
              as={asPath(page)}
              isActive={activePage === page}
            >
              {page}
            </PageLink>
          );
        })}
      </div>
      {activePage < total && (
        <Button
          href={hrefPath(activePage + 1)}
          as={asPath(activePage + 1)}
        >
          Вперед
        </Button>
      )}
    </div>
  );
};

export default Pagination;
