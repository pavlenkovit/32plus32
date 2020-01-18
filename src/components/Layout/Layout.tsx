import React, { FC } from 'react';
import Head from 'next/head';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from '../Container';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

import Styled from './Layout.styled';
import useWindowWidth from '../../hooks/useWindowWidth';

const Layout: FC = ({ children }) => {
  const windowWidth = useWindowWidth();

  return (
    <Styled.Container>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap&subset=cyrillic" rel="stylesheet" />
        <title>32PLUS32</title>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta httpEquiv="Cache-Control" content="max-age=31536000, must-revalidate" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="32PLUS32" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
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
      </Head>
      {(windowWidth !== 0 && windowWidth <= 768) && <MobileMenu />}
      <div id="header">
        <Header />
        <Styled.BreadCrumbs id="breadcrumbs" />
      </div>
      <Styled.Main>
        <Container>
          <Styled.Inner>
            <Styled.Content>{children}</Styled.Content>
            <Styled.Sidebar>
              {(windowWidth > 768) && <Sidebar />}
            </Styled.Sidebar>
          </Styled.Inner>
        </Container>
      </Styled.Main>
      <Footer />
    </Styled.Container>
  );
};

export default Layout;
