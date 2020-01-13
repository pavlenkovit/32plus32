import React from 'react';
import cn from 'classnames';
import css from './Train.module.scss';
import Link from 'next/link';
import ArrowIcon from '../../../../icons/ArrowIcon';
import getDateByTitle from '../../../../utils/getDateByTitle';
import Author from './components/Author';
import { useSelector } from 'react-redux';

const Train = ({ title, slug, date, modified, fimg_url, _embedded: { author } }) => {
  const { day, month, year, weekDay } = getDateByTitle(title);
  const { isMobile } = useSelector(state => state.app);

  return (
    <div className={cn(css.container, { [css.mob]: isMobile })} itemScope itemType="http://schema.org/Article">
      <meta itemProp="datePublished" content={date} />
      <meta itemProp="dateModified" content={modified} />
      <meta itemProp="description" content={`Тренировка по гиревому спорту по классическому двоеборью на ${day}/${month}/${year}`} />
      <Author {...author[0]} />
      <div className={css.content}>
        <div className={css.titleLine}>
          <h2 className={css.title}>
            <Link href="train/[slug]" as={`train/${slug}`}>
              <a itemProp="url headline name">
                {`${day}/${month}/${year} (${weekDay})`}
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
      </div>
    </div>
  );
};

export default Train;
