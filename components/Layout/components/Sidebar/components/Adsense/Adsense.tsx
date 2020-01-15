import React, { FC } from 'react';

import Ad1 from './widgets/Ad1';
import Ad2 from './widgets/Ad2';
import Ad3 from './widgets/Ad3';

import Styled from './Adsense.styled';

const Adsense: FC = () => {
  return (
    <>
      <Styled.Widget>
        <Ad1 />
      </Styled.Widget>
      <Styled.Widget>
        <Ad2 />
      </Styled.Widget>
      <Styled.Widget>
        <Ad3 />
      </Styled.Widget>
    </>
  );
};

export default Adsense;
