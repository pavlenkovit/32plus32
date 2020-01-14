import React, { FC } from 'react';
import Title from './MainTitle.styled';

const MainTitle: FC = ({ children }) => {
  return (
    <Title>{children}</Title>
  );
};

export default MainTitle;
