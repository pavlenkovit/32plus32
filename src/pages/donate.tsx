import React from 'react';
import { NextPage } from 'next';

import CustomHead from '../components/CustomHead';
import Breadcrumbs from '../components/Breadcrumbs';
import MainTitle from '../components/MainTitle';
import Donate from '../components/Donate';

const DonatePage: NextPage = () => {
  const title = 'Поддержать проект 32PLUS32';
  const description = 'Вы можете помочь проекту развиваться дальше';
  const keywords = 'поддержка проекта';

  return (
    <>
      <CustomHead
        title={title}
        description={description}
        keywords={keywords}
      />
      <Breadcrumbs />
      <MainTitle>{title}</MainTitle>
      <Donate />
    </>
  );
};

export default DonatePage;
