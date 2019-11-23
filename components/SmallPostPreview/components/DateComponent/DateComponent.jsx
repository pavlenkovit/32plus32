import React from 'react';
import css from './DateComponent.module.scss';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

const DateComponent = ({ date }) => {
  return (
    <time className={css.date} dateTime={date}>
      {format(new Date(date), 'D MMMM YYYY', { locale: ru })}
    </time>
  );
};

export default DateComponent;
