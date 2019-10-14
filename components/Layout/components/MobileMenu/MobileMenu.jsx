import React, { useEffect } from 'react';
import css from './MobileMenu.module.scss';
import { CSSTransition } from 'react-transition-group';
import CloseIcon from '../../../../icons/CloseIcon';
import nav from '../../../../constants/nav';
import Link from 'next/link';
import ArrowIcon from '../Header/components/Nav/Nav';

const MobileMenu = ({ menuIsActive, closeMenu }) => {

  useEffect(() => {
    document.querySelector('body').style.overflow = '';
    if (menuIsActive) {
      document.querySelector('body').style.overflow = 'hidden';
    }
  }, [menuIsActive]);

  return (
    <CSSTransition
      in={menuIsActive}
      timeout={400}
      classNames={{
        enter: css.enter,
        enterActive: css.enterActive,
        exit: css.exit,
        exitActive: css.exitActive,
      }}
      unmountOnExit
    >
      <div className={css.container}>
        <button onClick={closeMenu} className={css.closeButton}>
          <CloseIcon className={css.closeIcon} color="#333" />
        </button>
        <ul className={css.list}>
          {nav.map((item, idx) => {
            return (
              <li key={idx} className={css.item}>
                <Link href={item.href} as={item.as}>
                  <a className={css.link}>{item.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </CSSTransition>
  );
};

export default MobileMenu;
