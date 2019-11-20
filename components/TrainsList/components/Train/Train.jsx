import React from 'react';
import cn from 'classnames';
import css from './Train.module.scss';
import Link from 'next/link';
import ArrowIcon from '../../../../icons/ArrowIcon';
import getDateByTitle from '../../../../utils/getDateByTitle';
import TrainIcon from '../../../../icons/TrainIcon';
import Author from './components/Author';
import { useSelector } from 'react-redux';

const Train = ({ title, slug, fimg_url, _embedded: { author } }) => {
  const { day, month, year, weekDay } = getDateByTitle(title);
  const { isMobile } = useSelector(state => state.app);

  return (
    <div className={cn(css.container, { [css.mob]: isMobile })}>
      <Author {...author[0]} />
      <div className={css.content}>
        <div className={css.date}>{day}/{month}/{year} ({weekDay})</div>
        <h2 className={css.title}>
          <Link href="train/[slug]" as={`train/${slug}`}>
            <a>
              <b>Тренировка</b> {isMobile ? 'по ДВ' : 'по классическому двоеборью'}
            </a>
          </Link>
        </h2>
        <Link href="train/[slug]" as={`train/${slug}`}>
          <a className={css.action}>
            <span>Тренироваться</span>
            <ArrowIcon className={css.arrowIcon} size={10} color="#e24242" />
          </a>
        </Link>
      </div>
      <div className={css.iconWrap}>
        <TrainIcon size={isMobile ? 30 : 40} color="#9B9FA3" />
      </div>
    </div>
  );
};

export default Train;
