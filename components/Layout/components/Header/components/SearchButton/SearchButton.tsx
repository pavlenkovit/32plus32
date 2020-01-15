import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchIcon from '../../../../../../icons/SearchIcon';
import CloseIcon from '../../../../../../icons/CloseIcon';

import Styled from './SearchButton.styled';

const SearchButton: FC = () => {
  const { searchIsActive } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();

  const toggleSearch = () => {
    dispatch({ type: 'TOGGLE_SEARCH' });
  };

  return (
    <Styled.Button onClick={toggleSearch} id="toggle-search">
      {searchIsActive ? <CloseIcon /> : <SearchIcon />}
    </Styled.Button>
  );
};

export default SearchButton;
