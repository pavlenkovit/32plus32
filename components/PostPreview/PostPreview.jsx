import React, { PureComponent } from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

import Tags from './components/Tags';
import Author from "../Author";
import Categories from './components/Categories';
import Comments from './components/Comments';

import css from './PostPreview.module.scss';

class PostPreview extends PureComponent {

  render() {
    const { post } = this.props;
    const { id, slug, title, tags, date, fimg_url, _embedded: { author, 'wp:term': term } } = post;
    const href = `/post?slug=${slug}`;
    const as = `/post/${slug}`;

    return (
      <article className={css.container}>
        <div className={css.inner}>
          <div className={css.body}>
            {fimg_url && (
              <Link href={href} as={as}>
                <a className={css.imgLink}>
                  <img className={css.img} src={fimg_url} alt="" />
                </a>
              </Link>
            )}
            <div className={css.info}>
              <Author
                {...author[0]}
                date={date}
              />
            </div>
            <h3 className={css.title}>
              <Link href={href} as={as}>
                <a className={css.titleLink}>{ReactHtmlParser(title.rendered)}</a>
              </Link>
            </h3>
            <Tags list={term[1]} />
          </div>
          <footer className={css.footer}>
            <div className={css.categories}>
              <Categories list={term[0]} />
            </div>
            <Comments id={id} />
          </footer>
        </div>
      </article>
    );
  }
}

export default PostPreview;
