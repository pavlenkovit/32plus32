import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import css from './Tags.module.scss';
import Item from './components/Tag';

class Tags extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <ul className={css.list}>
        {list.map((id) => (
          <Item id={id} />
        ))}
      </ul>
    );
  }
}

Tags.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Tags;
