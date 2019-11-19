import React from 'react';
import css from './Adsense.module.scss';
import Ad1 from '../Ad1';
import Ad2 from '../Ad2';

const Adsense = () => {
  return (
    <>
      <div className={css.widget}>
        <Ad1 />
      </div>
      <div className={css.widget}>
        <Ad2 />
      </div>
    </>
  );
};

export default Adsense;
