import React, { FC } from 'react';
import Link from 'next/link';
import Styled from './Logo.styled';

const Logo: FC = () => {
  return (
    <Link href="/" passHref>
      <Styled.Logo>
        <Styled.Img src="/img/logo.png" alt="32PLUS32" />
      </Styled.Logo>
    </Link>
  );
};

export default Logo;
