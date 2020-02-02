import React, { FC } from 'react';
import Styled from './Donate.styled';

const comments = [
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
    comment: '',
    date: '1 фев',
    year: 2020,
    price: 200,
  },
];

const Donate: FC = () => {
  return (
    <section>
      <Styled.Main>
        <Styled.Col>
          <Styled.Avatars>
            <img src="/avatars/pavlenko_32plus32.jpg" alt="Павленко Виталий" />
            <img src="/avatars/sergey_rudnev.jpg" alt="Руднев Сергей" />
            <img src="/avatars/davydik.jpg" alt="Давыдик Дмитрий" />
          </Styled.Avatars>
          <p>Мы любим и развиваем наш проект <strong>32PLUS32</strong>. У нас нет платных планов тренировок или услуг – и это наш главный принцип. Все программы и статьи так и останутся доступными для всех <strong>бесплатно</strong>.</p>
          <p>Вы можете поддержать нас и помочь нам развиваться дальше, а также внести свой вклад в развитие гиревого спорта!</p>
          <p>Сделаете перевод через яндекс.деньги или чеерез карту (кропка выбора справа от суммы) и напишите ваши пожелания или комментарии (имя по желанию). Мы обязательно отобразим перевод на этой странице.</p>
        </Styled.Col>
        <Styled.Col>
          <iframe
            src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0%2032PLUS32&targets-hint=&default-sum=100&button-text=11&payment-type-choice=on&comment=on&hint=%D0%9D%D0%B0%D0%BF%D0%B8%D1%88%D0%B8%D1%82%D0%B5%20%D0%B2%D0%B0%D1%88%20%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B9%20%D0%B8%20%D0%B8%D0%BC%D1%8F%20(%D0%BF%D0%BE%20%D0%B6%D0%B5%D0%BB%D0%B0%D0%BD%D0%B8%D1%8E).%20%D0%9D%D0%B0%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%3A%20%22%D0%A3%D0%B4%D0%B0%D1%87%D0%B8%20%D0%B2%D0%B0%D0%BC!%20(%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%20%D0%90.%D0%92)%22&successURL=&quickpay=shop&account=410011174243829"
            width="100%"
            height="325"
            frameBorder="0"
            // @ts-ignore
            allowTransparency="true"
            scrolling="no"
          />
        </Styled.Col>
      </Styled.Main>
      <h2>Поддержали проект:</h2>
      <Styled.CommentsList>
        {comments.map((item, idx) => {
          return (
            <Styled.Comment key={idx}>
              <Styled.Date>
                <div>{item.date}</div>
                <div>{item.year} г</div>
              </Styled.Date>
              <Styled.Wallet />
              <Styled.Text>{item.comment !== '' ? item.comment : <Styled.Hide>Без комментария</Styled.Hide>}</Styled.Text>
              <Styled.Price>+ {item.price} ₽</Styled.Price>
            </Styled.Comment>
          );
        })}
      </Styled.CommentsList>
    </section>
  );
};

export default Donate;
