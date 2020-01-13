import React, { FC } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from '../Container';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

import { Main, Wrapper, Inner, SidebarWrapper, Content, BreadCrumbs } from './Layout.styled';

import '../../style.scss';

const Layout: FC = ({ children }) => {
  const { isMobile } = useSelector((state: any) => state.app);

  return (
    <Wrapper>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/public/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/public/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/public/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/public/favicons/site.webmanifest" />
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
      {isMobile && <MobileMenu />}
      <div id="header">
        <Header />
        <BreadCrumbs id="breadcrumbs" />
      </div>
      <Main>
        <Container>
          <Inner>
            <Content>
              {children}
            </Content>
            {!isMobile && (
              <SidebarWrapper>
                <Sidebar />
              </SidebarWrapper>
            )}
          </Inner>
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
