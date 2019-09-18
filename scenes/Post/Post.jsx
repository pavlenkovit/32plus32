import React from 'react';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import ReactHtmlParser from 'react-html-parser';

import css from './Post.module.scss';
import Author from '../../components/PostPreview/components/Author';

const Post = ({ title, content, author, date, fimg_url }) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>{ReactHtmlParser(title.rendered)}</h1>
      <div className={css.info}>
        <Author id={author}>
          <time className={css.date}>
            {format(new Date(date), 'D MMMM YYYY', { locale: ru })}
          </time>
        </Author>
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
