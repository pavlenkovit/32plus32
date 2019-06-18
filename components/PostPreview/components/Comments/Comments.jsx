import React from 'react';
import PropTypes from 'prop-types';
import css from './Comments.module.scss';
import CommentIcon from '../../../../icons/CommentIcon';

const Comments = (props) => {
  const { count } = props;
  return (
    <div className={css.container}>
      <CommentIcon size={14} color="#9B9FA3" />
      <div className={css.count}>{count}</div>
    </div>
  );
};

Comments.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Comments;
