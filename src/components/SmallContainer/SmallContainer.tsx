import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;

const SmallContainer: FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default SmallContainer;
