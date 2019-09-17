import React from 'react';
import { Row, Col } from 'react-grid-system';
import fetch from 'isomorphic-unfetch';

import baseURL from '../constants/baseURL';
import TrainingsPreview from '../components/TrainingsPreview';

const Index = (props) => {
  const { posts } = props;

  return (
    <div>
      <TrainingsPreview trainings={posts} />
    </div>
  );
};

Index.getInitialProps = async (context) => {
  const res = await fetch(`${baseURL}/posts?categories=77&per_page=100`);
  const data = await res.json();

  return { posts: data };
};

export default Index;
