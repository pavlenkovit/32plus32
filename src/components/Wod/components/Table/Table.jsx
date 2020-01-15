import React from 'react';
import cn from 'classnames';
import css from './Table.module.scss';

const Table = ({ isTrain, content }) => {
  if (!isTrain) {
    return (
      <div className={cn(css.wrapper, css.relax)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="500" viewBox="0 0 490.7 490.7">
          <path d="M436.2 154.6H182.4c-12.4 0-33.1 4.7-33.1 36.6V240h320v-48.8c0-31.8-20.7-36.6-33.1-36.6z" fill="#fff" />
          <path d="M80.3 250.6H32V80H0v330.7h32v-85.4h426.7v85.3h32v-160z" fill="#fff" />
          <circle cx="85.3" cy="197.3" r="44.7" fill="#fff"/>
        </svg>
      </div>
    );
  }

  return (
    <div className={css.wrapper} dangerouslySetInnerHTML={{ __html: content.rendered }} />
  );
};

export default Table;
