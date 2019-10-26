import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import css from './Layout.module.scss';
import Container from '../Container';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

import '../../style.scss';

const Layout = ({ children }) => {
  const { isMobile } = useSelector(state => state.app);
  const dispatch = useDispatch();

  const handleResize = () => {
    dispatch({ type: 'CHECK_IS_MOBILE', payload: { isMobile: window.innerWidth <= 992 } });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  return (
    <div className={css.wrapper}>
      {isMobile && <MobileMenu />}
      <div id="header">
        <Header />
        <div id="breadcrumbs" />
      </div>
      <main className={css.main}>
        <Container>
          <div className={css.inner}>
            <div className={css.content}>
              {children}
            </div>
            {!isMobile && (
              <div className={css.sidebar}>
                <Sidebar />
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
