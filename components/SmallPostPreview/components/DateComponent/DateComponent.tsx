import React, { FC } from 'react';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

import Styled from './DateComponent.styled';

interface IProps {
  date: string;
}

const DateComponent: FC<IProps> = ({ date }) => {
  return (
    <Styled.Date dateTime={date}>
      {format(new Date(date), 'D MMMM YYYY', { locale: ru })}
    </Styled.Date>
  );
};

export default DateComponent;
