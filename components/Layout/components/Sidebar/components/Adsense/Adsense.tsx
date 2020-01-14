import React, { FC } from 'react';

import Ad1 from './widgets/Ad1';
import Ad2 from './widgets/Ad2';
import Ad3 from './widgets/Ad3';

import Widget from './Adsense.styled';

const Adsense: FC = () => {
  return (
    <>
      <Widget>
        <Ad1 />
      </Widget>
      <Widget>
        <Ad2 />
      </Widget>
      <Widget>
        <Ad3 />
      </Widget>
    </>
  );
};

export default Adsense;
