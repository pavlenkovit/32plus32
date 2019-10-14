import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import css from './Layout.module.scss';
import Container from '../Container';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

import '../../style.scss';

class Layout extends React.PureComponent {
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  handleResize = () => {
    this.props.checkIsMobile(window.innerWidth <= 992);
  };

  render() {
    const { children, isMobile } = this.props;
    return (
      <div className={css.wrapper}>
        {isMobile && <MobileMenu />}
        <div className={css.header} id="header">
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
  }
}

export default Layout;
