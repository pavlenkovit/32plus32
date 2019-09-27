import React from 'react';
import css from './Button.module.scss';
import Link from 'next/link';

const Button = ({ children, href, as }) => {
  return (
    <Link href={href} as={as}>
      <a className={css.button}>{children}</a>
    </Link>
  );
};

export default Button;
