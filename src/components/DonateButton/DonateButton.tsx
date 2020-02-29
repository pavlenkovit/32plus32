import React, { FC } from 'react';
import Link from 'next/link';
import Styled from './DonateButton.styled';

interface IProps {
  text?: string;
}

const DonateButton: FC<IProps> = ({ text = 'Поддержать проект' }) => {
  return (
    <Link href="/donate" passHref>
      <Styled.Button>{text}</Styled.Button>
    </Link>
  );
};

export default DonateButton;
