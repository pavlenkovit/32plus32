import React, { PureComponent } from 'react';

import css from './Tags.module.scss';
import Item from './components/Tag';

class Tags extends PureComponent {
  render() {
    const { list } = this.props;
    if (list.length === 0) {
      return null;
    }
    return (
      <ul className={css.list}>
        {list.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    );
  }
}

export default Tags;
