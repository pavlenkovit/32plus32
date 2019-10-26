import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Nav from './components/Nav';
import css from './Header.module.scss';
import Container from '../../../Container';
import SearchButton from './components/SearchButton';
import Logo from './components/Logo';
import Search from './components/Search';
import MenuButton from './components/MenuButton';

const Header = () => {
  const { isMobile, searchIsActive } = useSelector(state => state.app);

  return (
    <header className={css.container}>
      <Container>
        <div className={css.inner}>
          {isMobile ? (
            <>
              <Logo />
              <div className={css.mobileWrapper}>
                <SearchButton />
                <MenuButton />
              </div>
            </>
          ) : (
            <>
              <div className={css.left}>
                <Logo />
                <Nav />
              </div>
              <SearchButton />
            </>
          )}
        </div>
      </Container>
      <CSSTransition
        in={searchIsActive}
        timeout={200}
        classNames={{
          enter: css.enter,
          enterActive: css.enterActive,
          exit: css.exit,
          exitActive: css.exitActive,
        }}
        unmountOnExit
      >
        <Search />
      </CSSTransition>
    </header>
  );
};

export default Header;
