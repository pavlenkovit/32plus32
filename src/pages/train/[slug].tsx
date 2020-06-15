import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

import baseURL from '../../constants/baseURL';
import Post from '../../components/Post';
import CustomHead from '../../components/CustomHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { IPost } from '../../models/wp';
import DonateEnd from '../../components/DonateEnd';
import SmallContainer from '../../components/SmallContainer';

interface IProps {
  train: IPost;
}

const TrainPage: NextPage<IProps> = ({ train }) => {
  const { slug } = train;
  const matchDates = train.title.rendered.match(/\b\d*\.\d*\.\d*\b/ig);

  let type = 'dv';
  if (/^dc-/ig.test(slug)) {
    type = 'dc';
  }

  const dateStr = matchDates ? matchDates[0] : '???';

  const values: any = {
    dv: {
      title: `Тренировка по классическому двоеборью на ${dateStr}`,
      parentTitle: 'Классическое двоеборье',
      description: `Тренировка по гиревому спорту по классическому двоеборью на ${dateStr}`,
    },
    dc: {
      title: `Тренировка по длинному циклу на ${dateStr}`,
      parentTitle: 'Длинный цикл',
      description: `Тренировка по гиревому спорту по длинному циклу на ${dateStr}`,
    },
  };

  const { title, description, parentTitle } = values[type];
  const keywords = 'тренировка по гиревому спорту, гиревой спорт план';
  const url = `/train/${train.slug}`;

  return (
    <SmallContainer>
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
            title: 'Тренировки',
            href: '/trainings',
            as: '/trainings',
          },
          {
            title: parentTitle,
            href: '/trainings/[slug]',
            as: `/trainings/${type}`,
          },
        ]}
      />
      <Post {...train} title={{ rendered: title }} />
      <DonateEnd>Нравятся тренировки? Поддержите нас</DonateEnd>
    </SmallContainer>
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
