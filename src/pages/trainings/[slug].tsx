import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

import baseURL from '../../constants/baseURL';
import CustomHead from '../../components/CustomHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import MainTitle from '../../components/MainTitle';
import TrainsList from '../../components/TrainsList';
import Pagination from '../../components/Pagination';
import { IPost } from '../../models/wp';
import getTotalPages from '../../utils/getTotalPages';
import { IPaginationProps } from '../../models/pagination';

interface IProps extends IPaginationProps {
  trainings: IPost[];
  slug: any;
}

const values: any = {
  dv: {
    title: 'Тренировки по классическому двоеборью',
    description: 'Тренировочный план по гиревому спорту по классическому двоеборью',
  },
  dc: {
    title: 'Тренировки по длинному циклу',
    description: 'Тренировочный план по гиревому спорту по длинному циклу',
  },
};

const TrainingsPage: NextPage<IProps> = ({ trainings, totalPages, page, slug }) => {
  let localSlug = 'dv';
  if (slug === 'dc') {
    localSlug = 'dc';
  }

  const { title, description } = values[localSlug];
  const keywords = 'тренировки по гиревому спорту, гири тренировки';

  return (
    <>
      <CustomHead
        title={title}
        description={description}
        keywords={keywords}
        type="trainings"
      />
      <Breadcrumbs
        items={[
          {
            title: 'Тренировки',
            href: '/trainings',
            as: '/trainings',
          },
        ]}
      />
      <MainTitle>{title}</MainTitle>
      <TrainsList trainings={trainings} />
      <Pagination
        total={totalPages}
        activePage={page}
        rootHref="/trainings/[slug]"
        rootAs={`/trainings/${slug}`}
      />
    </>
  );
};

TrainingsPage.getInitialProps = async (context) => {
  const { query: { page: p, slug } } = context;
  const category = slug === 'dc' ? 94 : 77;
  const page = p ? +p : 1;
  const res = await fetch(`${baseURL}/posts?categories=${category}&page=${page}&per_page=20&_embed`);
  const trainings = await res.json();
  const totalPages = getTotalPages(res);
  return { trainings, totalPages, page, slug };
};

export default TrainingsPage;
