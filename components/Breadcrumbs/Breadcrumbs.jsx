import React from 'react';
import css from './Breadcrumbs.module.scss';
import { Container } from 'react-grid-system';

const Breadcrumbs = () => {
  return (
    <div className={css.container}>
      <Container>
        <ul className={css.list}>
          <li className={css.item}>
            <a href="/#" className={css.link}>Главная</a>
          </li>
          <li className={css.item}>
            <a href="/#" className={css.link}>Статьи</a>
          </li>
          <li className={css.item}>
            Упражнения
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
