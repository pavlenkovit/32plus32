import React from 'react';
import { useDispatch } from 'react-redux';
import { Burger, Inner, Line } from './MenuButton.styled';

const MenuButton = () => {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  return (
    <Burger onClick={toggleMenu}>
      <Inner>
        <Line top={0} />
        <Line top={8} />
        <Line top={16} />
      </Inner>
    </Burger>
  );
};

export default MenuButton;
