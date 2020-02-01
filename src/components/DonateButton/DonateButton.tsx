import React, { FC } from 'react';
import Link from 'next/link';
import Styled from './DonateButton.styled';

interface IProps {
}

const DonateButton: FC<IProps> = () => {
  return (
    <Link href="/donate" passHref>
      <Styled.Button>Поддержать проект</Styled.Button>
    </Link>
  );
};

export default DonateButton;
