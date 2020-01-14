import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import CloseIcon from '../../../../icons/CloseIcon';
import nav from '../../../../constants/nav';

import { Wrapper, Button, List, Item, LinkElement } from './MobileMenu.styled';

const MobileMenu: FC = () => {
  const { menuIsActive } = useSelector((state: any) => state.app);
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
    <Wrapper onClick={closeMenu}>
      <Button onClick={closeMenu}>
        <CloseIcon color="#333" />
      </Button>
      <List>
        {nav.map((item, idx) => {
          return (
            <Item key={idx}>
              <Link href={item.href} as={item.as}>
                <LinkElement onClick={closeMenu}>{item.title}</LinkElement>
              </Link>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
};

export default MobileMenu;
