import React from 'react';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru'

import css from './Train.module.scss';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';
import ArrowIcon from '../../../../icons/ArrowIcon';

const Train = ({ title, slug, fimg_url }) => {
  const renderTitle = ReactHtmlParser(title.rendered);

  const matchDates = renderTitle[0].match(/\b\d*\.\d*\.\d*\b/ig);
  const dateStr = matchDates[0];
  const [ day, month, year ] = dateStr.split('.');
  //const date = new Date(+year, month - 1, +day);

  return (
    <Link href="train/[slug]" as={`train/${slug}`}>
      <a className={css.container}>
        <div className={css.date}>{day}/{month}/{year} (среда)</div>
        <h2 className={css.title}>
          <b>Тренировка</b> по классическому двоеборью
        </h2>
        <div className={css.action}>
          <span>Тренироваться</span>
          <ArrowIcon className={css.arrowIcon} size={10} />
        </div>
      </a>
    </Link>
  );
};

export default Train;
