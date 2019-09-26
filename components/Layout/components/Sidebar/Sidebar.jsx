import React, { PureComponent } from 'react';
import css from './Sidebar.module.scss';

class Sidebar extends PureComponent {
  render() {
    return (
      <div className={css.container}>
        <aside className={css.sidebar}>
          <p>
            Сейчас мы существуем за счет вашей поддержки, поэтому любая сумма поможет проекту существовать и развиваться дальше!
          </p>
          <iframe
            src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82&targets-hint=&default-sum=100&button-text=11&payment-type-choice=on&mobile-payment-type-choice=on&hint=&successURL=&quickpay=shop&account=410011174243829"
            width="100%"
            height="222"
            frameBorder="0"
            allowTransparency="true"
            scrolling="no"
          />
        </aside>
      </div>
    )
  }
}

export default Sidebar;
