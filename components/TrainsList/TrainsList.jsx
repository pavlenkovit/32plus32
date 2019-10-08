import React from 'react';
import css from './TrainsList.module.scss';
import Train from './components/Train';

const TrainsList = ({ trainings }) => {
  return (
    <div className={css.container}>
      {trainings.map(train => {
        return (
          <div key={train.id} className={css.item}>
            <Train {...train} />
          </div>
        );
      })}
    </div>
  );
};

export default TrainsList;
