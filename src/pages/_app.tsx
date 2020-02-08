import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import createStore from '../store';
import Layout from '../components/Layout';

import '../styles/style.css';

const store = createStore();

const theme = {
  colors: {
    primary: '#e24242',
  },
};

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
    );
  }
}
