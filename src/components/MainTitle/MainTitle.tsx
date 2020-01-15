import React, { FC } from 'react';
import Styled from './MainTitle.styled';

interface IProps {
  itemProp?: string;
}

const MainTitle: FC<IProps> = ({ children, itemProp = '' }) => {
  return (
    <Styled.Title itemProp={itemProp}>{children}</Styled.Title>
  );
};

export default MainTitle;
