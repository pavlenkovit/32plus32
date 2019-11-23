import React from 'react';
import Link from 'next/link';
import css from './Author.module.scss';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

const Author = (props) => {
  const { name, slug, date } = props;
  const href = '/user/[slug]';
  const as = `/user/${slug}`;

  return (
    <div className={css.container} itemProp="author" itemScope itemType="http://schema.org/Person">
      <Link href={href} as={as}>
        <a className={css.imgLink}>
          <img className={css.img} src={`/static/avatars/${slug}.jpg`} alt={name} itemProp="image" />
        </a>
      </Link>
      <div className={css.content}>
        <Link href={href} as={as}>
          <a className={css.name} itemProp="url"><span itemProp="name">{name}</span></a>
        </Link>
        {date && (
          <time className={css.date} dateTime={date}>
            {format(new Date(date), 'D MMMM YYYY', { locale: ru })}
          </time>
        )}
      </div>
    </div>
  );
};

export default Author;
