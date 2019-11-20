import React from 'react';
import css from './TrainsList.module.scss';
import Train from './components/Train';
import TopArticle from '../../yandexRTB/TopArticle';
import BottomArticle from '../../yandexRTB/BottomArticle';
import cn from 'classnames';

const TrainsList = ({ trainings }) => {
  return (
    <div>
      <div className={cn(css.ad, css.adTop)}>
        <TopArticle />
      </div>
      <div>
        {trainings.map(train => {
          return (
            <Train key={train.id} {...train} />
          );
        })}
      </div>
      <div className={css.ad}>
        <BottomArticle />
      </div>
    </div>
  );
};

export default TrainsList;
