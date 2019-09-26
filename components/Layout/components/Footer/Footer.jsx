import React from 'react';
import css from './Footer.module.scss';
import Container from '../../../Container';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.inner}>
          footer content
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
