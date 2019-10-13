import React, { useState, useRef, useEffect } from 'react';
import Router from 'next/router';
import css from './Search.module.scss';
import Container from '../../../../../Container';
import SearchIcon from '../../../../../../icons/SearchIcon';

const Search = ({ closeSearch }) => {
  const [value, onChange] = useState('');
  const container = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    onChange('');
    closeSearch();
    Router.push(`/search?s=${value}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (container.current && !container.current.contains(event.target)) {
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
    <div className={css.container} ref={container}>
      <Container>
        <form onSubmit={onSubmit}>
          <div className={css.inner}>
            <input className={css.input} type="text" value={value} placeholder="Найти..." onChange={(e) => { onChange(e.target.value); }} />
            <button className={css.button} type="submit">
              <SearchIcon className={css.icon} />
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Search;
