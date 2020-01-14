import React, { FC } from 'react';
import Link from 'next/link';

import { Item, LinkElement } from './PageLink.styled';

interface IProps {
  href: string;
  as: string;
  isActive?: boolean;
}

const PageLink: FC<IProps> = ({ children, href, as, isActive = false }) => {
  return (
    <Item isActive={isActive}>
      {isActive ? (
        <LinkElement as="div">{children}</LinkElement>
      ) : (
        <Link href={href} as={as}>
          <LinkElement>{children}</LinkElement>
        </Link>
      )}
    </Item>
  );
};

export default PageLink;
