import React, { useState, useRef, useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import Container from '../../../../../Container';
import SearchIcon from '../../../../../../icons/SearchIcon';

import Styled from './Search.styled';

const Search: FC = () => {
  const dispatch = useDispatch();
  const [value, onChange] = useState('');
  const container = useRef<HTMLDivElement>(null);

  const closeSearch = () => {
    dispatch({ type: 'CLOSE_SEARCH' });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    onChange('');
    closeSearch();
    Router.push(`/search?s=${value}`);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (container.current && !container.current.contains(event.target) && event.target.id !== 'toggle-search') {
        closeSearch();
      }
    };
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  });

  return (
    <Styled.Container ref={container}>
      <Container>
        <form onSubmit={onSubmit}>
          <Styled.Inner>
            <Styled.Input type="text" value={value} placeholder="Найти..." onChange={(e) => { onChange(e.target.value); }} />
            <Styled.Button type="submit">
              <SearchIcon />
            </Styled.Button>
          </Styled.Inner>
        </form>
      </Container>
    </Styled.Container>
  );
};

export default Search;
