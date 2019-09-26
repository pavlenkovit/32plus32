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
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </Provider>
    )
  }
}
