import React from 'react';

import css from './Trainings.module.scss';
import Train from './components/Train';
import Pagination from '../../components/Pagination';

const Trainings = ({ trainings, totalPages, page }) => {
  return (
    <div>
      <div className={css.container}>
        {trainings.map(train => {
          return (
            <div key={train.id} className={css.item}>
              <Train {...train} />
            </div>
          );
        })}
      </div>
      <Pagination
        total={totalPages}
        activePage={page}
        rootHref="/trainings"
        rootAs="/trainings"
      />
    </div>
  );
};

export default Trainings;
