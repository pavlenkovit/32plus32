import React from 'react';
import fetch from 'isomorphic-unfetch';

import baseURL from '../constants/baseURL';
import TrainingsPreview from '../scenes/Trainings';

const Index = (props) => {
  const { posts } = props;

  return (
    <TrainingsPreview trainings={posts} />
  );
};

Index.getInitialProps = async (context) => {
  const res = await fetch(`${baseURL}/posts?categories=77&per_page=100`);
  const data = await res.json();

  return { posts: data };
};

export default Index;
