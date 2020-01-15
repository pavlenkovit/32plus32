import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Styled from './MenuButton.styled';

const MenuButton: FC = () => {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  return (
    <Styled.Burger onClick={toggleMenu}>
      <Styled.Inner>
        <Styled.Line top={0} />
        <Styled.Line top={8} />
        <Styled.Line top={16} />
      </Styled.Inner>
    </Styled.Burger>
  );
};

export default MenuButton;
