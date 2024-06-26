import React, { FC } from 'react';
import Head from 'next/head';

import Header from './components/Header';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

import * as Styled from './Layout.styled';
import useWindowWidth from '../../hooks/useWindowWidth';
import { size } from '../../constants/device';
import Container from '../Container';

const Layout: FC = ({ children }) => {
  const windowWidth = useWindowWidth();

  const els = React.Children.map(children, (element: any) => {
    return {
      element,
      name: element?.type?.name,
      displayName: element?.type?.displayName,
    };
  });
  console.log(els);

  return (
    <Styled.Container>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap&subset=cyrillic" rel="stylesheet" />
        <title>32PLUS32</title>
        <meta httpEquiv="Cache-Control" content="max-age=31536000, must-revalidate" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="32PLUS32" />
        <meta name="yandex-verification" content="2fa33287c5c04ae8" />
        <script>window.yaContextCb=window.yaContextCb||[]</script>
        <script src="https://yandex.ru/ads/system/context.js" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.fbAsyncInit = function() {
                FB.init({
                  appId: '446552789570835',
                  autoLogAppEvents: true,
                  xfbml: true,
                  version: 'v4.0',
                });
              };`,
          }}
        />
        <script async defer src="https://connect.facebook.net/en_US/sdk.js" />
        <script data-ad-client="ca-pub-2490800653471089" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script src="https://vk.com/js/api/openapi.js?168" type="text/javascript" />
      </Head>
      {(windowWidth !== 0 && windowWidth <= size.laptop) && <MobileMenu />}
      <div id="header">
        <Header />
      </div>
      <Styled.Main>
        <Container>
          {children}
        </Container>
      </Styled.Main>
      <Footer />
    </Styled.Container>
  );
};

export default Layout;
