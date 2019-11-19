import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import css from './SearchButton.module.scss';
import SearchIcon from '../../../../../../icons/SearchIcon';
import CloseIcon from '../../../../../../icons/CloseIcon';

const SearchButton = () => {
  const { searchIsActive } = useSelector(state => state.app);
  const dispatch = useDispatch();

  const toggleSearch = () => {
    dispatch({ type: 'TOGGLE_SEARCH' });
  };

  return (
    <button className={css.button} onClick={toggleSearch} id="toggle-search">
      {searchIsActive ? (
        <CloseIcon className={css.icon} />
      ) : (
        <SearchIcon className={css.icon} />
      )}
    </button>
  );
};

export default SearchButton;
