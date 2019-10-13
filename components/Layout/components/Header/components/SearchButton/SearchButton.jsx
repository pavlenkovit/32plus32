import React from 'react';
import css from './SearchButton.module.scss';
import SearchIcon from '../../../../../../icons/SearchIcon';
import CloseIcon from '../../../../../../icons/CloseIcon';

const SearchButton = ({ searchIsActive, toggleSearch }) => {
  return (
    <button className={css.button} onClick={toggleSearch}>
      {searchIsActive ? (
        <CloseIcon className={css.icon} />
      ) : (
        <SearchIcon className={css.icon} />
      )}
    </button>
  );
};

export default SearchButton;
