import React, { useState, useRef, useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import Container from '../../../../../Container';
import SearchIcon from '../../../../../../icons/SearchIcon';

import { Wrapper, Inner, Input, Button } from './Search.styled';

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
    <Wrapper ref={container}>
      <Container>
        <form onSubmit={onSubmit}>
          <Inner>
            <Input type="text" value={value} placeholder="Найти..." onChange={(e) => { onChange(e.target.value); }} />
            <Button type="submit">
              <SearchIcon />
            </Button>
          </Inner>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Search;
