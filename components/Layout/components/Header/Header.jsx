import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
              <a className={css.logo}>
                <img src="/static/img/logo.png" alt="new32" className={css.logoImg}/>
              </a>
            </Link>
            <div className={css.searchGroup}>
              <form>
                <div className={css.searchGroup__inner}>
                  <input type="text" className={css.searchGroup__input} placeholder="Поиск по сайту"/>
                  <input type="submit" value="Найти" className={css.searchGroup__button}/>
                </div>
              </form>
            </div>
          </div>
        </Container>
        <Nav />
      </header>
    );
  }
}

Header.propTypes = {
};

export default Header;