import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import css from './Post.module.scss';
import Author from '../../components/Author';
import CustomHead from '../../components/CustomHead';

const Post = ({ title, content, author, date, fimg_url }) => {
  return (
    <div className={css.container}>
      <CustomHead title={ReactHtmlParser(title.rendered)} imgKey={fimg_url} />
      <h1 className={css.title}>{ReactHtmlParser(title.rendered)}</h1>
      <div className={css.info}>
        <Author
          name="Ivan Ivanov"
          slug="ivan"
          date={date}
        />
      </div>
      {fimg_url && (
        <div className={css.imgWrapper}>
          <img className={css.img} src={fimg_url} alt="" />
        </div>
      )}
      <div>
        {ReactHtmlParser(content.rendered)}
      </div>
    </div>
  );
};

export default Post;
