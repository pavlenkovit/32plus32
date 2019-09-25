import React from 'react';
import fetch from 'isomorphic-unfetch';

import baseURL from '../constants/baseURL';
import Trainings from '../scenes/Trainings';

const TrainingsPage = (props) => {
  const { posts } = props;

  return (
    <Trainings trainings={posts} />
  );
};

TrainingsPage.getInitialProps = async (context) => {
  const res = await fetch(`${baseURL}/posts?categories=77&_embed`);
  const data = await res.json();

  return { posts: data };
};

export default TrainingsPage;
