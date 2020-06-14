import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import CloseIcon from '../../../../icons/CloseIcon';
import nav from '../../../../constants/nav';

import Styled from './MobileMenu.styled';
import { IState } from '../../../../store/reducers';

const MobileMenu: FC = () => {
  const { menuIsActive } = useSelector((state: IState) => state.app);
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch({ type: 'CLOSE_MENU' });
  };

  useEffect(() => {
    const body = document.querySelector('body');

    if (!body) {
      return;
    }

    body.style.overflow = '';
    if (menuIsActive) {
      body.style.overflow = 'hidden';
    }
  }, [menuIsActive]);

  if (!menuIsActive) {
    return null;
  }

  return (
    <Styled.Container onClick={closeMenu}>
      <Styled.Button onClick={closeMenu}>
        <CloseIcon color="#333" />
      </Styled.Button>
      <Styled.List>
        {nav.map((item, idx) => {
          return (
            <Styled.Item key={idx}>
              <Link href={item.href} as={item.as} passHref>
                <Styled.Link onClick={closeMenu}>{item.title}</Styled.Link>
              </Link>
            </Styled.Item>
          );
        })}
      </Styled.List>
    </Styled.Container>
  );
};

export default MobileMenu;
