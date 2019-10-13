import React from 'react';
import css from './MobileMenu.module.scss';
import { CSSTransition } from 'react-transition-group';

const MobileMenu = ({ menuIsActive, closeMenu }) => {

  return (
    <CSSTransition
      in={menuIsActive}
      timeout={200}
      classNames={{
        enter: css.enter,
        enterActive: css.enterActive,
        exit: css.exit,
        exitActive: css.exitActive,
      }}
      unmountOnExit
    >
      <div className={css.container} onClick={closeMenu}>
      </div>
    </CSSTransition>
  );
};

export default MobileMenu;
