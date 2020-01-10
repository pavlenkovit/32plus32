import * as React from 'react';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import Container from '../../../Container';
import SearchButton from './components/SearchButton';
import Logo from './components/Logo';
import Search from './components/Search';
import MenuButton from './components/MenuButton';

import { Wrapper, Inner, Left, MobileWrapper } from './Header.styled';

const Header: React.FC = () => {
  const { isMobile, searchIsActive } = useSelector((state: any) => state.app);

  return (
    <Wrapper>
      <Container>
        <Inner>
          {isMobile ? (
            <>
              <Logo />
              <MobileWrapper>
                <SearchButton />
                <MenuButton />
              </MobileWrapper>
            </>
          ) : (
            <>
              <Left>
                <Logo />
                <Nav />
              </Left>
              <SearchButton />
            </>
          )}
        </Inner>
      </Container>
      {searchIsActive && <Search />}
    </Wrapper>
  );
};

export default Header;
