import React from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../constants/baseURL';
import CustomHead from '../components/CustomHead';
import Breadcrumbs from '../components/Breadcrumbs';
import MainTitle from '../components/MainTitle';
import TrainsList from '../components/TrainsList';
import Pagination from '../components/Pagination';

const TrainingsPage = ({ trainings, totalPages, page }) => {
  const title = 'Тренировки по классическому двоеборью';
  const description = 'Тренировочный план по гиревому спорту по классическому двоеборью';
  const keywords = 'тренировки по гиревому спорту, гири тренировки';

  return (
    <>
      <CustomHead
        title={title}
        description={description}
        keywords={keywords}
      />
      <Breadcrumbs items={[{ title }]} />
      <MainTitle>{title}</MainTitle>
      <TrainsList trainings={trainings} />
      <Pagination
        total={totalPages}
        activePage={page}
        rootHref="/trainings"
        rootAs="/trainings"
      />
    </>
  );
};

TrainingsPage.getInitialProps = async (context) => {
  const { query: { page: p } } = context;
  const page = p ? +p : 1;
  const res = await fetch(`${baseURL}/posts?categories=77&page=${page}&per_page=20&_embed`);
  const trainings = await res.json();
  const totalPages = +res.headers.get('X-WP-TotalPages');
  return { trainings, totalPages, page };
};

export default TrainingsPage;
