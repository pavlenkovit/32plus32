import React, { PureComponent } from 'react';
import cn from 'classnames';
import css from './Header.module.scss';
import { Container } from 'react-grid-system';
import Link from 'next/link';
import Nav from './components/Nav';

class Header extends PureComponent {
  render() {
    return (
      <header className={css.container}>
        <Container>
          <div className={css.inner}>
            <Link href="/">
              <a className={css.logo}>32PLUS32</a>
            </Link>
            <Nav />
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
