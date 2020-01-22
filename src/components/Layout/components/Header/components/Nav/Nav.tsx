import React, { FC } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';

import menu from '../../../../../../constants/nav';
import ArrowIcon from '../../../../../../icons/ArrowIcon';
import Submenu from './components/Submenu';
import Styled from './Nav.styled';

const Nav: FC = () => {
  // const router = useRouter();
  // console.log(router); // TODO: выделять активный роут

  return (
    <nav itemScope itemType="http://schema.org/SiteNavigationElement">
      <Styled.Menu itemScope itemType="http://schema.org/ItemList">
        {menu.map((item, idx) => (
          <Styled.Item key={idx}>
            <span itemProp="itemListElement" typeof="ListItem">
              <Link href={item.href} as={item.as} passHref>
                <Styled.Link property="item" typeof="WebPage">
                  <span property="name">{item.title}</span>
                  {item.arrow && (
                    <ArrowIcon color="#fff" size={12} />
                  )}
                </Styled.Link>
              </Link>
            </span>
            {item.arrow && <Submenu />}
          </Styled.Item>
        ))}
      </Styled.Menu>
    </nav>
  );
};

export default Nav;
