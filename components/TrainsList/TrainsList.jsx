import React from 'react';
import Train from './components/Train';

const TrainsList = ({ trainings }) => {
  return trainings.map(train => {
    return (
      <Train key={train.id} {...train} />
    );
  });
};

export default TrainsList;
