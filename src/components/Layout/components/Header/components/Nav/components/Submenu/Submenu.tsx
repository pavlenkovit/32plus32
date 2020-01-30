import React, { FC } from 'react';
import Link from 'next/link';

import Styled from './Submenu.styled';
import { IMenuItem } from '../../Nav';

interface IProps {
  items: IMenuItem[];
}

const Submenu: FC<IProps> = ({ items }) => {
  return (
    <Styled.List>
      {items.map((item, idx) => {
        return (
          <Styled.Item key={idx} itemProp="itemListElement">
            <Link href={item.href} as={item.as} passHref>
              <Styled.Link property="item" typeof="WebPage">
                <span property="name">{item.title}</span>
              </Styled.Link>
            </Link>
          </Styled.Item>
        );
      })}
    </Styled.List>
  );
};

export default Submenu;
