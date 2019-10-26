import React from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import css from './MenuButton.module.scss';

const MenuButton = () => {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  return (
    <div className={css.burger} onClick={toggleMenu}>
      <div className={css.inner}>
        <div className={cn(css.line, css.top)} />
        <div className={cn(css.line, css.center)} />
        <div className={cn(css.line, css.bottom)} />
      </div>
    </div>
  );
};

export default MenuButton;
