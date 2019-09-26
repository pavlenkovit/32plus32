import React from 'react';
import '../../style.scss';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import css from './Layout.module.scss';
import Breadcrumbs from '../Breadcrumbs';
import Container from '../Container';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <Breadcrumbs />
      <main className={css.main}>
        <Container>
          <div className={css.inner}>
            <div className={css.content}>
              {children}
            </div>
            <div className={css.sidebar}>
              <Sidebar />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
};

export default Layout;
