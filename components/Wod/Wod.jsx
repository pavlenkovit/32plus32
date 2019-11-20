import React, { Component } from 'react';
import cn from 'classnames';
import Table from './components/Table';

import css from './Wod.module.scss';
import getDateByTitle from '../../utils/getDateByTitle';

class Wod extends Component {
  state = { isTrain: true, isOverflow: true, isRect: false, dayPlus: false };

  render() {
    const { content, title } = this.props;
    const { isTrain, isRect, isOverflow } = this.state;
    const { day, month, year, weekDay } = getDateByTitle(title);

    return (
      <div className={css.main}>
        <div className={cn(css.container, { [css.rect]: isRect })}>
          <img className={css.img} src="/static/img/kettlebell.png" alt=""/>
          <div className={css.topContent}>
            <img className={css.authorImg} src="/static/avatars/sergey_rudnev.jpg" alt=""/>
              <div>
              <div className={css.date}>{day}/{month}/20{year} ({weekDay})</div>
              {!isTrain ? (
                <div className={css.title}><strong>День отдыха</strong></div>
              ) : (
                <div className={css.title}><strong>Тренировка</strong> по классическому двоеборью</div>
              )}
            </div>
          </div>
          <div className={css.content}>
            <Table isTrain={isTrain} content={content} />
          </div>
          {isOverflow && (
            <div className={css.more}>
              Продолжение тренировки на сайте
            </div>
          )}
          <div className={css.brand}>32PLUS32</div>
        </div>
        <div className={css.buttons}>
          <button onClick={() => { this.setState(prevState => ({ isTrain: !prevState.isTrain })); }}>Тренировка?</button>
          <button onClick={() => { this.setState(prevState => ({ isOverflow: !prevState.isOverflow })); }}>Footer?</button>
          <button onClick={() => { this.setState(prevState => ({ isRect: !prevState.isRect })); }}>Квадрат?</button>
          <div>{isRect ? '764 x 764' : '764 x 955'}</div>
        </div>
      </div>
    );
  }
}

export default Wod;

