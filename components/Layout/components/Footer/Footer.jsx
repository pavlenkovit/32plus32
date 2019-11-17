import React from 'react';
import css from './Footer.module.scss';
import Container from '../../../Container';
import FooterSidebar from './components/FooterSidebar';
import FooterList from './components/FooterList';
import Link from 'next/link';
import Social from './components/Social';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.inner}>
          <div className={css.row}>
            <FooterSidebar title="Статьи">
              <FooterList
                list={[
                  {
                    title: 'Научные статьи',
                    href: '/category/[slug]',
                    as: '/category/nauchnye-stati',
                  },
                  {
                    title: 'Планирование',
                    href: '/category/[slug]',
                    as: '/category/planirovanie-trenirovok',
                  },
                  {
                    title: 'Упражнения',
                    href: '/category/[slug]',
                    as: '/category/upragneniya',
                  },
                  {
                    title: 'Техника',
                    href: '/category/[slug]',
                    as: '/category/tehnika',
                  },
                  {
                    title: 'Тренинг',
                    href: '/category/[slug]',
                    as: '/category/trenirovki',
                  },
                  {
                    title: 'Восстановление',
                    href: '/category/[slug]',
                    as: '/category/vosstanovlenie',
                  },
                  {
                    title: 'Личности',
                    href: '/category/[slug]',
                    as: '/category/lichnosti',
                  },
                ]}
              />
            </FooterSidebar>
            <FooterSidebar title="Страницы">
              <FooterList
                list={[
                  {
                    title: 'Тренирвочный план',
                    href: '/trainings',
                    as: '/trainings',
                  },
                  {
                    title: 'Нормативы',
                    href: '/page/[slug]',
                    as: '/page/normativy-po-girevomu-sportu',
                  },
                  {
                    title: 'Контакты',
                    href: '/page/[slug]',
                    as: '/page/kontakty',
                  },
                  {
                    title: 'Стать автором',
                    href: '/page/[slug]',
                    as: '/page/authors',
                  },
                ]}
              />
            </FooterSidebar>
            <FooterSidebar title="Поддержка проекта">
              <iframe
                src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0&targets-hint=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D1%82%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82&default-sum=100&button-text=11&hint=&successURL=https%3A%2F%2F32plus32.ru%2F&quickpay=shop&account=410011174243829"
                width="100%"
                height="250"
                frameBorder="0"
                allowTransparency="true"
                scrolling="no"
              />
            </FooterSidebar>
            <FooterSidebar title="Мы в соцсетях">
              <Social />
            </FooterSidebar>
          </div>
          <div className={css.copy}>
            <div className={css.text}>© <Link href="/"><a>32PLUS32.RU</a></Link>, 2015-2019. Все права защищены.</div>
            <div>
              {/* LiveInternet counter */}
              <script type="text/javascript" dangerouslySetInnerHTML={{
                __html: `
                  document.write('<a href="//www.liveinternet.ru/click" '+
                  'target="_blank"><img src="//counter.yadro.ru/hit?t14.5;r'+
                  escape(document.referrer)+((typeof(screen)=='undefined')?'':
                  ';s'+screen.width+'*'+screen.height+'*'+(screen.colorDepth?
                  screen.colorDepth:screen.pixelDepth))+';u'+escape(document.URL)+
                  ';h'+escape(document.title.substring(0,150))+';'+Math.random()+
                  '" alt="" title="LiveInternet: показано число просмотров за 24'+
                  ' часа, посетителей за 24 часа и за сегодня" '+
                  'border="0" width="88" height="31"><\\/a>')
                `}}
              />
              {/* /LiveInternet */}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
