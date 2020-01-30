import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

import baseURL from '../constants/baseURL';
import Wod from '../components/Wod';
import { IPost } from '../models/wp';

interface IProps {
  trainings: IPost[]
}

const WodPage: NextPage<IProps> = ({ trainings }) => {
  return <Wod {...trainings[0]} />;
};

WodPage.getInitialProps = async () => {
  const res = await fetch(`${baseURL}/posts?categories=94&per_page=1&_embed`);
  const trainings = await res.json();
  return { trainings };
};

export default WodPage;
