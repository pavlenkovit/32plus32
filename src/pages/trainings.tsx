import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import CustomHead from '../components/CustomHead';
import Breadcrumbs from '../components/Breadcrumbs';
import MainTitle from '../components/MainTitle';

const TrainingsPage: NextPage = () => {
  const title = 'Тренировки по гиревому спорту';
  const description = 'Тренировочный план по гиревому спорту';
  const keywords = 'тренировки по гиревому спорту, гири тренировки';

  return (
    <>
      <CustomHead
        title={title}
        description={description}
        keywords={keywords}
      />
      <Breadcrumbs />
      <MainTitle>{title}</MainTitle>
      <div>
        <div>
          <Link href="/trainings/[slug]" as="/trainings/dv" passHref>
            <a>Тренировки по классическому двоеборью</a>
          </Link>
        </div>
        <div>
          <Link href="/trainings/[slug]" as="/trainings/dc" passHref>
            <a>Тренировки по длинному циклу</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TrainingsPage;
