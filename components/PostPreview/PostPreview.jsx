import React, { PureComponent } from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

import Tags from './components/Tags';
import Author from '../Author';
import Categories from './components/Categories';
import Comments from './components/Comments';

import css from './PostPreview.module.scss';

class PostPreview extends PureComponent {

  render() {
    const { post } = this.props;
    const { id, slug, title, date, fimg_url, _embedded: { author, 'wp:term': term } } = post;
    const href = `/post?slug=${slug}`;
    const as = `/post/${slug}`;

    return (
      <article className={css.container} itemScope itemType="http://schema.org/Article">
        {fimg_url && (
          <Link href={href} as={as}>
            <a className={css.imgLink} style={{ backgroundImage: `url(${fimg_url})` }} itemProp="url" />
          </Link>
        )}
        <div className={css.body}>
          <h2 className={css.title} itemProp="name">
            <Link href={href} as={as}>
              <a className={css.titleLink} itemProp="url">
                <span className={css.underline}>
                  {ReactHtmlParser(title.rendered)}
                </span>
              </a>
            </Link>
          </h2>
          <div className={css.info}>
            <Author
              {...author[0]}
              date={date}
            />
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
