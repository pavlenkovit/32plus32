import * as React from 'react';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import Container from '../../../Container';
import SearchButton from './components/SearchButton';
import Logo from './components/Logo';
import Search from './components/Search';
import MenuButton from './components/MenuButton';

import Styled from './Header.styled';
import { IState } from '../../../../store/reducers';

const Header: React.FC = () => {
  const { isMobile, searchIsActive } = useSelector((state: IState) => state.app);

  return (
    <Styled.Container>
      <Container>
        <Styled.Inner>
          {isMobile ? (
            <>
              <Logo />
              <Styled.MobileWrapper>
                <SearchButton />
                <MenuButton />
              </Styled.MobileWrapper>
            </>
          ) : (
            <>
              <Styled.Left>
                <Logo />
                <Nav />
              </Styled.Left>
              <SearchButton />
            </>
          )}
        </Styled.Inner>
      </Container>
      {searchIsActive && <Search />}
    </Styled.Container>
  );
};

export default Header;
