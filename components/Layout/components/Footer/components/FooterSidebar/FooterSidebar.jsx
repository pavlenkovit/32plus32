import React from 'react';
import css from './FooterSidebar.module.scss';

const FooterSidebar = ({ title, children }) => {
  return (
    <aside className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </aside>
  );
};

export default FooterSidebar;
