import React, { FC } from 'react';
import PageLink from './components/PageLink';
import Button from './components/Button';

import { Wrapper, List } from './Pagination.styled';

const maxCount = 5;

interface IProps {
  total: number;
  rootAs: string;
  rootHref: string;
  activePage: number;
}

const Pagination: FC<IProps> = ({ total, rootAs, rootHref, activePage }) => {
  if (total === 1) {
    return null;
  }

  const getPages = () => {
    const pages = new Array(total)
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

    return pages.filter((page) => page < activePage + maxCount / 2 && page > activePage - maxCount / 2);
  };

  const pages = getPages();

  const hrefPath = (page: number) => `${rootHref}?page=${page}`;

  const asPath = (page: number) => `${rootAs}?page=${page}`;

  return (
    <Wrapper>
      {activePage > 1 && (
        <Button
          href={hrefPath(activePage - 1)}
          as={asPath(activePage - 1)}
          prev
        >
          Назад
        </Button>
      )}
      <List>
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
      </List>
      {activePage < total && (
        <Button
          href={hrefPath(activePage + 1)}
          as={asPath(activePage + 1)}
          next
        >
          Вперед
        </Button>
      )}
    </Wrapper>
  );
};

export default Pagination;
