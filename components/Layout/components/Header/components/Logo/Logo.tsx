import React, { FC } from 'react';
import Link from 'next/link';
import Wrapper from './Logo.styled';

const Logo: FC = () => {
  return (
    <Link href="/">
      <Wrapper>32PLUS32</Wrapper>
    </Link>
  );
};

export default Logo;
