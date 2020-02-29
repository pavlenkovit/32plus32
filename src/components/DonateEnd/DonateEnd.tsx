import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import * as Styled from './DonateEnd.styled';
import DonateButton from '../DonateButton';
import Container from '../Container';

const DonateEnd: FC = ({ children }) => {
  const [root, updRoot] = useState<any>(null);

  useEffect(() => {
    const element = document.querySelector('#donate-footer');
    if (element) {
      updRoot(element);
    }
  }, []);

  if (!root) {
    return null;
  }

  return ReactDOM.createPortal((
    <Styled.Wrapper>
      <Container>
        <Styled.Inner>
          <Styled.Title>{children}</Styled.Title>
          <DonateButton text="Поддержать проект" />
        </Styled.Inner>
      </Container>
    </Styled.Wrapper>
  ), root);
};

export default DonateEnd;
