import React from 'react';
import fetch from 'isomorphic-unfetch';

import baseURL from '../constants/baseURL';
import Trainings from '../scenes/Trainings';

const TrainingsPage = ({ trainings, totalPages, page }) => {
  return (
    <Trainings trainings={trainings} totalPages={totalPages} page={page} />
  );
};

TrainingsPage.getInitialProps = async (context) => {
  const { query: { page: p } } = context;
  const page = p ? +p : 1;

  const res = await fetch(`${baseURL}/posts?categories=77&page=${page}&_embed`);
  const trainings = await res.json();
  const totalPages = +res.headers.get('X-WP-TotalPages');

  return { trainings, totalPages, page };
};

export default TrainingsPage;
