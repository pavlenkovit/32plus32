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
      <div className={css.container}>
        {trainings.map(train => {
          return (
            <div key={train.id} className={css.item}>
              <Train {...train} />
            </div>
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
