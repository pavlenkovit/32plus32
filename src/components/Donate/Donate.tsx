import React, { FC } from 'react';
import Styled from './Donate.styled';

const Donate: FC = () => {
  return (
    <Styled.Main>
      <Styled.Col>
        <p>Мы любим и развиваем наш проект <strong>32PLUS32</strong>. У нас нет платных планов тренировок или услуг – и это наш главный принцип. Все программы так и останутся доступными для всех <strong>бесплатно</strong>.</p>
        <p>Вы можете поддержать нас и помочь нам развиваться дальше, а также внести свой вклад в развитие гиревого спорта.</p>
        <Styled.Avatars>
          <img src="/avatars/pavlenko_32plus32.jpg" alt="Павленко Виталий" />
          <img src="/avatars/sergey_rudnev.jpg" alt="Руднев Сергей" />
          <img src="/avatars/davydik.jpg" alt="Давыдик Дмитрий" />
        </Styled.Avatars>
      </Styled.Col>
      <Styled.Col>
        <iframe
          title="donate"
          src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0&targets-hint=&default-sum=100&button-text=11&payment-type-choice=on&comment=on&hint=%D0%9D%D0%B0%D0%BF%D0%B8%D1%88%D0%B8%D1%82%D0%B5%20%D0%B2%D0%B0%D1%88%D0%B8%20%D0%BF%D0%BE%D0%B6%D0%B5%D0%BB%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B8%D0%BB%D0%B8%20%D0%B1%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0%D1%80%D0%BD%D0%BE%D1%81%D1%82%D0%B8&successURL=&quickpay=shop&account=410011174243829"
          width="100%"
          height="313"
          frameBorder="0"
          allowTransparency
          scrolling="no"
        />
      </Styled.Col>
    </Styled.Main>
  );
};

export default Donate;
