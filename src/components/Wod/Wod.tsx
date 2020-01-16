import React, { FC, useState } from 'react';
import Table from './components/Table';
import getDateByTitle from '../../utils/getDateByTitle';
import { IPost } from '../../models/wp';
import Styled from './Wod.styled';

const Wod: FC<IPost> = ({ content, title }) => {
  const [isTrain, toggleTrain] = useState(true);
  const [isOverflow, toggleOverflow] = useState(true);
  const [isRect, toggleRect] = useState(false);

  const { day, month, year, weekDay } = getDateByTitle(title);

  return (
    <Styled.Main>
      <Styled.Container isRect={isRect}>
        <Styled.Img src="/public/img/kettlebell.png" alt="" />
        <Styled.TopContent>
          <Styled.AuthorImg src="/public/avatars/sergey_rudnev.jpg" alt="" />
          <div>
            <Styled.Date>{day}/{month}/20{year} ({weekDay})</Styled.Date>
            {!isTrain ? (
              <Styled.Title>
                <strong>День отдыха</strong>
              </Styled.Title>
            ) : (
              <Styled.Title>
                <strong>Тренировка</strong> по классическому двоеборью
              </Styled.Title>
            )}
          </div>
        </Styled.TopContent>
        <Styled.Content>
          <Table isTrain={isTrain} content={content} />
        </Styled.Content>
        {isOverflow && (
          <Styled.More>
            Продолжение тренировки на сайте
          </Styled.More>
        )}
        <Styled.Brand>32PLUS32</Styled.Brand>
      </Styled.Container>
      <Styled.Buttons>
        <button type="button" onClick={() => { toggleTrain(!isTrain); }}>Тренировка?</button>
        <button type="button" onClick={() => { toggleOverflow(!isOverflow); }}>Footer?</button>
        <button type="button" onClick={() => { toggleRect(!isRect); }}>Квадрат?</button>
        <div>{isRect ? '764 x 764' : '764 x 955'}</div>
      </Styled.Buttons>
    </Styled.Main>
  );
};

export default Wod;
