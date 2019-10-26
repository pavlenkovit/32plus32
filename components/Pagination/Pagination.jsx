import React from 'react';
import css from './Pagination.module.scss';
import PageLink from './components/PageLink';
import Button from './components/Button';

const maxCount = 5;

const Pagination = ({ total, rootAs, rootHref, activePage }) => {
  if (total === 1) {
    return null;
  }

  const getPages = () => {
    let pages = new Array(total)
      .fill(0)
      .map((val, idx) => idx + 1);

    if (total <= maxCount) {
      return pages;
    }

    if (activePage > total - maxCount / 2) {
      return pages.slice(-maxCount);
    }

    if (activePage < maxCount / 2) {
      return pages.slice(0, maxCount);
    }

    return pages.filter(page => page < activePage + maxCount / 2 && page > activePage - maxCount / 2);
  };

  const pages = getPages();

  const hrefPath = (page) => `${rootHref}?page=${page}`;

  const asPath = (page) => `${rootAs}?page=${page}`;

  return (
    <div className={css.container}>
      {activePage > 1 && (
        <Button
          href={hrefPath(activePage - 1)}
          as={asPath(activePage - 1)}
          text="Назад"
          prev
        />
      )}
      <div className={css.list}>
        {pages[0] !== 1 && (
          <div className={css.dots}>...</div>
        )}
        {pages.map((page) => (
          <PageLink
            key={page}
            href={hrefPath(page)}
            as={asPath(page)}
            isActive={activePage === page}
          >
            {page}
          </PageLink>
        ))}
        {pages[pages.length - 1] !== total && (
          <div className={css.dots}>...</div>
        )}
      </div>
      {activePage < total && (
        <Button
          href={hrefPath(activePage + 1)}
          as={asPath(activePage + 1)}
          text="Вперед"
          next
        />
      )}
    </div>
  );
};

export default Pagination;
