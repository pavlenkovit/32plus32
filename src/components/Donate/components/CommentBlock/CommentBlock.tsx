import React, { FC } from 'react';
import Styled from './CommentBlock.styled';

interface IProps {
  comment: string;
  date: string;
  year: number;
  price: number;
}

const CommentBlock: FC<IProps> = ({ date, year, comment, price }) => {
  return (
    <Styled.Container>
      <Styled.Date>
        <div>{date}</div>
        <div>{year} г</div>
      </Styled.Date>
      <Styled.Wallet />
      <Styled.Text>{comment !== '' ? comment : <Styled.Hide>Без комментария</Styled.Hide>}</Styled.Text>
      <Styled.Price>+ {price} ₽</Styled.Price>
    </Styled.Container>
  );
};

export default CommentBlock;
