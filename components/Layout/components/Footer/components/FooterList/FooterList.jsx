import React from 'react';
import Link from 'next/link';
import { Item } from './FooterList.styled';

const FooterList = ({ list }) => {
  return (
    <div>
      {list.map((item, idx) => {
        return (
          <Item key={idx}>
            <Link href={item.href} as={item.as}>
              <a>{item.title}</a>
            </Link>
          </Item>
        );
      })}
    </div>
  );
};

export default FooterList;
