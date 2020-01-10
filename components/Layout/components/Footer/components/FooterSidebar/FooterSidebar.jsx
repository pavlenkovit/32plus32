import React from 'react';
import { Wrapper, Title } from './FooterSidebar.styled';

const FooterSidebar = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default FooterSidebar;
