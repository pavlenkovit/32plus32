import React from 'react';
import cn from 'classnames';
import css from './Button.module.scss';
import Link from 'next/link';
import ArrowPrevIcon from '../../../../icons/ArrowPrevIcon';

const Button = ({ children, href, as, text, prev = false, next = false }) => {
  return (
    <Link href={href} as={as}>
      <a className={css.button}>
        {prev && <ArrowPrevIcon className={css.icon} />}
        <span>{text}</span>
        {next && <ArrowPrevIcon className={cn(css.icon, css.iconRotate)} />}
      </a>
    </Link>
  );
};

export default Button;
