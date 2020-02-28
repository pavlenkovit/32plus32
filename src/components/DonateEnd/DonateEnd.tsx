import React, { FC } from 'react';

import Styled from './DonateEnd.styled';
import DonateButton from '../DonateButton';

const DonateEnd: FC = ({ children }) => {
  return (
    <Styled.Wrapper>
      {children}
      <DonateButton />
    </Styled.Wrapper>
  );
};

export default DonateEnd;
