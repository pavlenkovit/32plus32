import React from 'react';
import PropTypes from 'prop-types';
import css from './Categories.module.scss';

import Category from './components/Category';

const Categories = (props) => {
  const { list } = props;
  return (
    <ul className={css.list}>
      {list.map((id, idx) => (
        <Category key={idx} id={id} />
      ))}
    </ul>
  );
};

Categories.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Categories;
