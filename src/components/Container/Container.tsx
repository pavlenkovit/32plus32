import React, { FC } from 'react';

import Styled from './Container.styled';

interface IProps {
  isSmall?: boolean;
}

const Container: FC<IProps> = ({ children, isSmall = false }) => {
  return (
    <Styled isSmall={isSmall}>
      {children}
    </Styled>
  );
};

export default Container;
