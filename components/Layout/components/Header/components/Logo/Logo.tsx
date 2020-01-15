import React, { FC } from 'react';
import Link from 'next/link';
import Styled from './Logo.styled';

const Logo: FC = () => {
  return (
    <Link href="/">
      <Styled.Logo>32PLUS32</Styled.Logo>
    </Link>
  );
};

export default Logo;
