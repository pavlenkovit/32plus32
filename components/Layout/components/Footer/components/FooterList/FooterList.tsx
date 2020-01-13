import React, { FC } from 'react';
import Link from 'next/link';
import Item from './FooterList.styled';

interface IItem {
  title: string;
  href: string;
  as: string;
}

interface IProps {
  list: IItem[];
}

const FooterList: FC<IProps> = ({ list }) => {
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
