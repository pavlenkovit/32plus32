import React from 'react';
import css from './Categories.module.scss';

import Category from './components/Category';

const Categories = ({ list }) => {
  return (
    <div className={css.list}>
      {list.map((item, idx) => (
        <>
          <Category key={item.id} {...item} />
          {idx !== list.length - 1 && <span>, </span>}
        </>
      ))}
    </div>
  );
};

export default Categories;
