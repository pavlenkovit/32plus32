import React, { FC } from 'react';
import { Wrapper, Title } from './FooterSidebar.styled';

interface IProps {
  title: string;
}

const FooterSidebar: FC<IProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default FooterSidebar;
