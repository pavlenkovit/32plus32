import React, { FC } from 'react';
import Wrapper from './Container.styled';

const Container: FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default Container;
