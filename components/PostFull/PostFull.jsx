import React, { PureComponent } from 'react';
import ReactHtmlParser from 'react-html-parser';
import css from './PostFull.module.scss';
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import Author from '../PostPreview/components/Author';

class PostFull extends PureComponent {
  render() {
    const { title, content, author, date } = this.props;
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
  }
}

export default PostFull;
