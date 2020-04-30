import React, { FC, useState } from 'react';
import Styled from './DonateInfo.styled';
import CommentBlock from './components/CommentBlock/CommentBlock';

const comments = [
  {
    date: '5 апр',
    year: 2020,
    price: 500,
  },
  {
    date: '4 апр',
    year: 2020,
    price: 300,
  },
  {
    comment: 'Продолжаем! Павел А',
    date: '3 апр',
    year: 2020,
    price: 500,
  },
  {
    date: '2 апр',
    year: 2020,
    price: 100,
  },
  {
    date: '1 апр',
    year: 2020,
    price: 500,
  },
];

const DonateInfo: FC = () => {
  const [isRect, toggleRect] = useState(false);

  let sum = 0;
  comments.forEach((comment) => {
    sum += comment.price;
  });
  return (
    <Styled.Main>
      <Styled.Container isRect={isRect}>
        <Styled.Img src="/img/kettlebell.png" alt="" />
        <Styled.TopContent>
          <Styled.Title>
            Поддержка проекта <strong>(апрель 2020)</strong>
          </Styled.Title>
        </Styled.TopContent>
        <Styled.List>
          {comments.map((comment, idx) => {
            return (
              <CommentBlock key={idx} {...comment} />
            );
          })}
        </Styled.List>
        <Styled.All>
          Всего собрано за апрель: <strong>{sum} ₽</strong>
        </Styled.All>
        <Styled.Brand>
          <img src="/img/logo.png" alt="32PLUS32" />
          <span>https://32plus32.ru/donate</span>
        </Styled.Brand>
      </Styled.Container>
      <Styled.Buttons>
        <button type="button" onClick={() => { toggleRect(!isRect); }}>Квадрат?</button>
        <div>{isRect ? '764 x 764' : '764 x 955'}</div>
      </Styled.Buttons>
    </Styled.Main>
  );
};

export default DonateInfo;
