import React, { FC } from 'react';
import Train from './components/Train';
import { IPost } from '../../models/wp';

interface IProps {
  trainings: IPost[];
}

const TrainsList: FC<IProps> = ({ trainings }) => {
  return (
    <>
      {trainings.map((train) => {
        return (
          <Train key={train.id} {...train} />
        );
      })}
    </>
  );
};

export default TrainsList;
