import React, { FC } from 'react';
import Styled from './FooterSidebar.styled';

interface IProps {
  title: string;
}

const FooterSidebar: FC<IProps> = ({ title, children }) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      {children}
    </Styled.Container>
  );
};

export default FooterSidebar;
