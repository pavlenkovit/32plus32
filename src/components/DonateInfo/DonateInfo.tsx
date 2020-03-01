import React, { FC, useState } from 'react';
import Styled from './DonateInfo.styled';
import CommentBlock from './components/CommentBlock/CommentBlock';

const comments = [
  {
    date: '28 фев',
    year: 2020,
    price: 200,
  },
  {
    comment: 'Так держать',
    date: '28 фев',
    year: 2020,
    price: 500,
  },
  {
    date: '28 фев',
    year: 2020,
    price: 500,
  },
  {
    date: '8 фев',
    year: 2020,
    price: 150,
  },
  {
    comment: 'Спасибо! Так держать!',
    date: '2 фев',
    year: 2020,
    price: 100,
  },
  {
    comment: 'На развитие. Павел А',
    date: '2 фев',
    year: 2020,
    price: 500,
  },
  {
    comment: 'Спасибо за работу!',
    date: '1 фев',
    year: 2020,
    price: 100,
  },
  {
    date: '1 фев',
    year: 2020,
    price: 200,
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
            Поддержка проекта <strong>(февраль 2020)</strong>
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
          Всего собрано за февраль: <strong>{sum} ₽</strong>
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
