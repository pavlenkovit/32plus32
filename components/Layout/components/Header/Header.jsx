import React, { PureComponent } from 'react';
import Nav from './components/Nav';
import css from './Header.module.scss';
import Container from '../../../Container';
import SearchButton from './components/SearchButton';
import Logo from './components/Logo';

class Header extends PureComponent {
  render() {
    const { isMobile } = this.props;
    return (
      <header className={css.container}>
        <Container>
          <div className={css.inner}>
            {isMobile ? (
              <>
                <Logo />
                <SearchButton />
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
      </header>
    );
  }
}

export default Header;
