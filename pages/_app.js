import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import createStore from '../store';

const store = createStore();

import Layout from '../components/Layout';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Container>
          <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/static/favicons/site.webmanifest" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <meta httpEquiv="Cache-Control" content="max-age=31536000, must-revalidate" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
            <script dangerouslySetInnerHTML={{ __html: `
                window.fbAsyncInit = function() {
                  FB.init({
                    appId: '446552789570835',
                    autoLogAppEvents: true,
                    xfbml: true,
                    version: 'v4.0',
                  });
                };`}}
            />
            <script async defer src="https://connect.facebook.net/en_US/sdk.js" />
            <script type="text/javascript" src="https://vk.com/js/api/share.js?93" charSet="windows-1251" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </Provider>
    )
  }
}
