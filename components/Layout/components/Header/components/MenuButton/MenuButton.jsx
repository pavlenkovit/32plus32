import React from 'react';
import cn from 'classnames';
import css from './MenuButton.module.scss';

const MenuButton = ({ toggleMenu }) => {
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
