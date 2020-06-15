import React, { FC } from 'react';

import Styled from './Container.styled';

const Container: FC = ({ children }) => {
  return (
    <Styled>
      {children}
    </Styled>
  );
};

export default Container;
