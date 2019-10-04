import React from 'react';
import css from './Train.module.scss';
import ReactHtmlParser from 'react-html-parser';

const Train = ({ title, fimg_url }) => {
  const renderTitle = ReactHtmlParser(title.rendered);
  return (
    <div className={css.container}>
      <h2>{renderTitle}</h2>
    </div>
  );
};

export default Train;
