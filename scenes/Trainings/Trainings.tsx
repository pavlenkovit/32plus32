import React, { FC } from 'react';
import Link from 'next/link';
import { isWeekend, isSameDay, eachDay, format, getDaysInMonth, getDay } from 'date-fns';
import ru from 'date-fns/locale/ru';
import cn from 'classnames';

// @ts-ignore
import css from './TrainingsPreview.module.scss';

interface IProps {
  trainings: any[];
}

const Trainings: FC<IProps> = ({ trainings }) => {
  const months = [
    {
      year: 2019,
      month: 4,
      trainings: [],
    },
    {
      year: 2019,
      month: 3,
      trainings: [],
    },
    {
      year: 2019,
      month: 2,
      trainings: [],
    },
    {
      year: 2019,
      month: 1,
      trainings: [],
    },
    {
      year: 2019,
      month: 0,
      trainings: [],
    },
    {
      year: 2018,
      month: 11,
      trainings: [],
    },
  ];

  months.forEach((section: any) => {
    trainings.forEach((item: any) => {
      const date = new Date(item.date);
      if (date.getMonth() === section.month && date.getFullYear() === section.year) {
        section.trainings.push(item);
      }
    });
  });

  return (
    <div>
      {months.map((section, idx) => {
        const { month, year } = section;
        const countDays = getDaysInMonth(new Date(year, month));
        const countEmpty = getDay(new Date(year, month, 1));
        const empties = [];

        for (let i = 0; i < countEmpty - 1; i + 1) {
          empties.push(<div className={css.item} />);
        }
        return (
          <div key={idx}>
            <h2 className={css.title}>
              <strong>{format(new Date(year, month), 'MMMM', { locale: ru })}</strong> {year} <strong>г.</strong>
            </h2>
            <div className={css.container}>
              {empties}
              {eachDay(
                new Date(year, month, 1),
                new Date(year, month, countDays),
              ).map(date => {
                const train: any = section.trainings.find((item: any) => isSameDay(item.date, date));
                const slug = train && train.slug;
                let href;
                let as;
                if (train) {
                  href = `/post?slug=${slug}`;
                  as = `/post/${slug}`;
                }

                const classesItem = cn(css.item, {
                  [css.item_weekend]: isWeekend(date),
                });

                return (
                  <div className={classesItem}>
                    <div className={css.dateWrapper}>
                      <div className={css.date}>{format(date, 'D MMMM', { locale: ru })}</div>
                    </div>
                    <div className={css.linkWrap}>
                      {train ? (
                        <Link as={as} href={href}>
                          <a href="/#" className={css.link}>Тренировка</a>
                        </Link>
                      ) : (
                        <div className={css.empty}>Отдых</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Trainings;
