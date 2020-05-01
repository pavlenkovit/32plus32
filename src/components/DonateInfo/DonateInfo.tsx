import React, { FC, useState } from 'react';
import Styled from './DonateInfo.styled';
import CommentBlock from './components/CommentBlock/CommentBlock';
import commentsAll from '../../constants/donate';

const DonateInfo: FC = () => {
  const [isRect, toggleRect] = useState(false);

  const currentMonth = commentsAll[0].date.slice(-3);
  const currentYear = commentsAll[0].year;
  const comments = commentsAll.filter((com) => com.date.indexOf(currentMonth) !== -1 && com.year === currentYear);

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
            Поддержка проекта <strong>(май 2020)</strong>
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
          Всего собрано за май: <strong>{sum} ₽</strong>
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
