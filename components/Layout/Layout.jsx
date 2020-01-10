import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from '../Container';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

import { Main, Wrapper, Inner, SidebarWrapper, Content, BreadCrumbs } from './Layout.styled';

import '../../style.scss';

const Layout = ({ children }) => {
  const { isMobile } = useSelector(state => state.app);

  return (
    <Wrapper>
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
