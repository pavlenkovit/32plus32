import React from 'react';

import css from './Train.module.scss';
import Link from 'next/link';
import ArrowIcon from '../../../../icons/ArrowIcon';
import Author from '../../../Author';
import getDateByTitle from '../../../../utils/getDateByTitle';

const Train = ({ title, slug, fimg_url, _embedded: { author } }) => {
  const { day, month, year, weekDay } = getDateByTitle(title);

  return (
    <Link href="train/[slug]" as={`train/${slug}`}>
      <a className={css.container}>
        <img className={css.img} src="/static/img/train.png" />
        <div className={css.date}>{day}/{month}/{year} ({weekDay})</div>
        <h2 className={css.title}>
          <b>Тренировка</b> по классическому двоеборью
        </h2>
        <Author {...author[0]} />
        <div className={css.action}>
          <span>Тренироваться</span>
          <ArrowIcon className={css.arrowIcon} size={10} />
        </div>
      </a>
    </Link>
  );
};

export default Train;
