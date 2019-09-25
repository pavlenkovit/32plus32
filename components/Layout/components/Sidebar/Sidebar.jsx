import React, { PureComponent } from 'react';
import css from './Sidebar.module.scss';

class Sidebar extends PureComponent {
  render() {
    return (
      <div className={css.container}>Реклама</div>
    )
  }
}

export default Sidebar;
