import React, { FC } from 'react';
import Link from 'next/link';

import menu from '../../../../../../constants/nav';
import ArrowIcon from '../../../../../../icons/ArrowIcon';
import Submenu from './components/Submenu';
import { Menu, Item, LinkElement } from './Nav.styled';

const Nav: FC = () => {
  return (
    <nav itemScope itemType="http://schema.org/SiteNavigationElement">
      <Menu itemScope itemType="http://schema.org/ItemList">
        {menu.map((item, idx) => (
          <Item key={idx}>
            <span itemProp="itemListElement" typeof="ListItem">
              <Link href={item.href} as={item.as}>
                <LinkElement property="item" typeof="WebPage">
                  <span property="name">{item.title}</span>
                  {item.arrow && (
                    <ArrowIcon color="#fff" size={12} />
                  )}
                </LinkElement>
              </Link>
            </span>
            {item.arrow && <Submenu />}
          </Item>
        ))}
      </Menu>
    </nav>
  );
};

export default Nav;
