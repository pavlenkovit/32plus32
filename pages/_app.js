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
            <meta name="theme-color" content="#ffffff" />
            <script dangerouslySetInnerHTML={{ __html: `
                window.fbAsyncInit = function() {
                  FB.init({
                    appId: '509265456539260',
                    autoLogAppEvents: true,
                    xfbml: true,
                    version: 'v4.0',
                  });
                };`}}
            />
            <script async defer src="https://connect.facebook.net/en_US/sdk.js" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </Provider>
    )
  }
}
