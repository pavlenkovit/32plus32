import React from 'react';
// import { format, getDay } from 'date-fns';
// import ru from 'date-fns/locale/ru'

import css from './Train.module.scss';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';
import ArrowIcon from '../../../../icons/ArrowIcon';
import Author from '../../../Author';

const Train = ({ title, slug, fimg_url, _embedded: { author, 'wp:term': term } }) => {
  const renderTitle = ReactHtmlParser(title.rendered);

  const matchDates = renderTitle[0].match(/\b\d*\.\d*\.\d*\b/ig);
  const dateStr = matchDates[0];
  const [ day, month, year ] = dateStr.split('.');

  const weekDay = new Date(+`20${year}`, month - 1, day).getDay();

  const days = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];

  return (
    <Link href="train/[slug]" as={`train/${slug}`}>
      <a className={css.container}>
        <img className={css.img} src="/static/img/train.png" />
        <div className={css.date}>{day}/{month}/{year} ({days[weekDay]})</div>
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
