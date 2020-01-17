import React, { FC } from 'react';
import Link from 'next/link';
import ArrowPrevIcon from '../../../../icons/ArrowPrevIcon';

import Styled from './Button.styled';

interface IProps {
  href: string;
  as: string;
  prev?: boolean;
  next?: boolean;
}

const Button: FC<IProps> = ({ children, href, as, prev = false, next = false }) => {
  return (
    <Link href={href} as={as}>
      <Styled.Link>
        {prev && <ArrowPrevIcon />}
        <span>{children}</span>
        {next && <ArrowPrevIcon prev />}
      </Styled.Link>
    </Link>
  );
};

export default Button;
