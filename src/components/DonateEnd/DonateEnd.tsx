import React, { FC } from 'react';

import * as Styled from './DonateEnd.styled';
import DonateButton from '../DonateButton';

const DonateEnd: FC = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{children}</Styled.Title>
      <DonateButton text="Поддержать проект" />
    </Styled.Wrapper>
  );
};

export default DonateEnd;
