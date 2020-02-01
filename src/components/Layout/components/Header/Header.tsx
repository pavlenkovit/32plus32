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
import useWindowWidth from '../../../../hooks/useWindowWidth';
import { size } from '../../../../constants/device';
import DonateButton from '../../../DonateButton';

const Header: React.FC = () => {
  const { searchIsActive } = useSelector((state: IState) => state.app);
  const windowWidth = useWindowWidth();

  return (
    <Styled.Container>
      <Container>
        <Styled.Inner>
          {(windowWidth !== 0 && windowWidth <= size.laptop) && (
            <>
              <Logo />
              <Styled.MobileWrapper>
                <SearchButton />
                <MenuButton />
              </Styled.MobileWrapper>
            </>
          )}
          {windowWidth > size.laptop && (
            <>
              <Styled.Left>
                <Logo />
                <Nav />
              </Styled.Left>
              <SearchButton />
              <Styled.ButtonWrap>
                <DonateButton />
              </Styled.ButtonWrap>
            </>
          )}
        </Styled.Inner>
      </Container>
      {searchIsActive && <Search />}
    </Styled.Container>
  );
};

export default Header;
