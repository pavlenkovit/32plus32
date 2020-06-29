import React, { FC, useEffect } from 'react';
import Link from 'next/link';

import Container from '../../../Container';
import FooterSidebar from './components/FooterSidebar';
import FooterList from './components/FooterList';
import Social from './components/Social';

import Styled from './Footer.styled';

const Footer: FC = () => {
  useEffect(() => {
    // @ts-ignore
    if (window && window.VK && window.VK.Widgets) {
      // @ts-ignore
      window.VK.Widgets.Group('vk_groups', { mode: 3, color1: '151111', color3: 'E24242' }, 52965338);
    }
  }, []);

  return (
    <Styled.Container>
      <Container>
        <Styled.Row>
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
          <FooterSidebar title="Мы вконтакте">
            <div id="vk_groups" />
          </FooterSidebar>
          <FooterSidebar title="Мы в соцсетях">
            <Social />
          </FooterSidebar>
        </Styled.Row>
        <Styled.Copy>
          <span>© <Link href="/" passHref><a>32PLUS32.RU</a></Link>, 2015-2020. Все права защищены.</span>
          <div>
            {/* Yandex.Metrika counter */}
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                    ym(34136935, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
                  });`,
              }}
            />
            <noscript><div><img src="https://mc.yandex.ru/watch/34136935" style={{ position: 'absolute', left: '-9999px' }} alt="" /></div></noscript>
            {/* /Yandex.Metrika counter */}
          </div>
        </Styled.Copy>
      </Container>
    </Styled.Container>
  );
};

export default Footer;
