import React from 'react';
import css from './Categories.module.scss';

import Category from './components/Category';

const Categories = ({ list }) => {
  return (
    <div className={css.list}>
      {list.map((item) => (
        <Category key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Categories;
