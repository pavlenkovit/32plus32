import React from 'react';
import css from './Logo.module.scss';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a className={css.logo}>32PLUS32</a>
    </Link>
  );
};

export default Logo;
