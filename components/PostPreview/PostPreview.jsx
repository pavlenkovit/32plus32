import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import ReactHtmlParser from 'react-html-parser';

import Tags from './components/Tags';
import Author from "./components/Author";
import Categories from './components/Categories';
import Comments from './components/Comments';

import css from './PostPreview.module.scss';

class PostPreview extends PureComponent {
  render() {
    const { post } = this.props;
    const { id, slug, title, tags, date, author, categories } = post;

    const href = `/post?slug=${slug}`;
    const as = `/post/${slug}`;

    return (
      <article className={css.container}>
        <div className={css.inner}>
          <div className={css.body}>
            <Link href={href} as={as}>
              <a className={css.imgLink}>
                <img className={css.img} src="/static/img/photo.jpg" alt="" />
              </a>
            </Link>
            <div className={css.info}>
              <Author id={author}>
                <time className={css.date}>
                  {format(new Date(date), 'D MMMM YYYY', { locale: ru })}
                </time>
              </Author>
            </div>
            <h3 className={css.title}>
              <Link href={href} as={as}>
                <a className={css.titleLink}>{ReactHtmlParser(title.rendered)}</a>
              </Link>
            </h3>
            {tags.length > 0 && (
              <Tags list={tags} />
            )}
          </div>
          <footer className={css.footer}>
            <div className={css.categories}>
              <Categories list={categories} />
            </div>
            <Comments id={id}/>
          </footer>
        </div>
      </article>
    );
  }
}

PostPreview.propTypes = {
  post: PropTypes.object,
};

export default PostPreview;
