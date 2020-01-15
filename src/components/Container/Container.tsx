import React, { FC } from 'react';
import Styled from './Container.styled';

const Container: FC = ({ children }) => {
  return (
    <Styled.Wrapper>
      {children}
    </Styled.Wrapper>
  );
};

export default Container;
