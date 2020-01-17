import React, { FC } from 'react';
import Link from 'next/link';

import Styled from './FooterList.styled';

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
          <Styled.List key={idx}>
            <Link href={item.href} as={item.as}>
              <a>{item.title}</a>
            </Link>
          </Styled.List>
        );
      })}
    </div>
  );
};

export default FooterList;
