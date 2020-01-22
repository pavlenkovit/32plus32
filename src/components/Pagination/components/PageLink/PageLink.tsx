import React, { FC } from 'react';
import Link from 'next/link';

import Styled from './PageLink.styled';

interface IProps {
  href: string;
  as: string;
  isActive?: boolean;
}

const PageLink: FC<IProps> = ({ children, href, as, isActive = false }) => {
  return (
    <Styled.Item isActive={isActive}>
      {isActive ? (
        <Styled.Link as="div">{children}</Styled.Link>
      ) : (
        <Link href={href} as={as} passHref>
          <Styled.Link>{children}</Styled.Link>
        </Link>
      )}
    </Styled.Item>
  );
};

export default PageLink;
