import React from 'react';
import Link from 'next/link';
import css from './Author.module.scss';
import { format } from "date-fns";
import ru from "date-fns/locale/ru";

const Author = (props) => {
  const { name, slug, img, date } = props;
  const href = `/author?slug=${slug}`;
  const as = `/author/${slug}`;

  return (
    <a href="/#" className={css.container}>
      <Link href={href} as={as}>
        <a className={css.imgLink}>
          <img className={css.img} src={img} />
        </a>
      </Link>
      <div>
        <Link href={href} as={as}>
          <a className={css.name}>{name}</a>
        </Link>
        <time className={css.date}>
          {format(new Date(date), 'D MMMM YYYY', { locale: ru })}
        </time>
      </div>
    </a>
  );
};

export default Author;
