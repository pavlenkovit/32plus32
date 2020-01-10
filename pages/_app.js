import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import createStore from '../store';
import { ThemeProvider } from 'styled-components';

const store = createStore();

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

import Layout from '../components/Layout';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    )
  }
}
