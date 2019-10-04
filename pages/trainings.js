import React from 'react';
import fetch from 'isomorphic-unfetch';

import baseURL from '../constants/baseURL';
import Trainings from '../scenes/Trainings';

const TrainingsPage = (props) => {
  const { trainings, totalPages, page } = props;

  return (
    <Trainings trainings={trainings} totalPages={totalPages} page={page} />
  );
};

TrainingsPage.getInitialProps = async (context) => {
  const { query, req } = context;

  let page = 1;
  if (query.page) { // переходы внутри сайта
    page = +context.query.page;
  }
  if (req && req.params) { // прямой переход по ссылке
    if (req.params.page) {
      page = +req.params.page;
    }
  }

  const res = await fetch(`${baseURL}/posts?categories=77&page=${page}&_embed`);
  const trainings = await res.json();
  const totalPages = +res.headers.get('X-WP-TotalPages');

  return { trainings, totalPages, page };
};

export default TrainingsPage;
