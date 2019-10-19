import React from 'react';
import css from './FooterList.module.scss';
import Link from 'next/link';

const FooterList = ({ list }) => {
  return (
    <div className={css.container}>
      {list.map((item, idx) => {
        return (
          <div className={css.item}>
            <Link key={idx} href={item.href} as={item.as}>
              <a className={css.link}>{item.title}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FooterList;
