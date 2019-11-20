import React from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../constants/baseURL';
import Wod from '../components/Wod';

const WodPage = ({ trainings }) => {
  return <Wod {...trainings[0]} />;
};

WodPage.getInitialProps = async () => {
  const res = await fetch(`${baseURL}/posts?categories=77&per_page=1&_embed`);
  const trainings = await res.json();
  return { trainings };
};

export default WodPage;
