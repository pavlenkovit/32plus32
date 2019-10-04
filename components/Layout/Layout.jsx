import React from 'react';
import '../../style.scss';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import css from './Layout.module.scss';
import Breadcrumbs from '../Breadcrumbs';
import Container from '../Container';
import Footer from './components/Footer';

class Layout extends React.PureComponent {
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  handleResize = () => {
    this.props.checkIsMobile(window.innerWidth <= 768);
  };

  render() {
    const { children, isMobile } = this.props;
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
