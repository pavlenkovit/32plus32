import React, { FC } from 'react';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import ReactHtmlParser from 'react-html-parser';

// @ts-ignore
import css from './Post.module.scss';
import Author from '../../components/PostPreview/components/Author';

interface IProps {
  title: any;
  content: any;
  author: any;
  date: any;
}

const Post: FC<IProps> = ({ title, content, author, date }) => {
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
      <div className={css.imgWrapper}>
        <img className={css.img} src="/static/img/photo.jpg" alt="" />
      </div>
      <div>
        {ReactHtmlParser(content.rendered)}
      </div>
    </div>
  );
};

export default Post;
