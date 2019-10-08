import React from 'react';
import css from './MainTitle.module.scss';

const MainTitle = ({ children }) => {
  return (
    <h1 className={css.title}>{children}</h1>
  );
};

export default MainTitle;
