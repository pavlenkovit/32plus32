import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

import baseURL from '../../constants/baseURL';
import Post from '../../components/Post';
import CustomHead from '../../components/CustomHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { IPost } from '../../models/wp';

interface IProps {
  train: IPost;
}

const TrainPage: NextPage<IProps> = ({ train }) => {
  const matchDates = train.title.rendered.match(/\b\d*\.\d*\.\d*\b/ig);
  const dateStr = matchDates ? matchDates[0] : '???';

  const title = `Тренировка по классическому двоеборью на ${dateStr}`;
  const description = `Тренировка по гиревому спорту по классическому двоеборью на ${dateStr}`;
  const keywords = 'тренировка по гиревому спорту, гиревой спорт план';
  const url = `/train/${train.slug}`;

  return (
    <>
      <CustomHead
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        type="training"
      />
      <Breadcrumbs
        items={[
          {
            title: 'Тренировки (ДВ)',
            href: '/trainings',
            as: '/trainings',
          },
          { title: dateStr },
        ]}
      />
      <Post {...train} title={{ rendered: title }} />
    </>
  );
};

TrainPage.getInitialProps = async (context) => {
  const { query: { slug } } = context;
  const res = await fetch(`${baseURL}/posts?slug=${slug}&_embed`);
  const data = await res.json();
  const train = data && data.length > 0 ? data[0] : null;
  return { train };
};

export default TrainPage;
