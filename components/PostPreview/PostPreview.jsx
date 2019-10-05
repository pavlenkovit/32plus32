import React, { PureComponent } from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

import Author from '../Author';
import Categories from './components/Categories';
import Comments from './components/Comments';

import css from './PostPreview.module.scss';

class PostPreview extends PureComponent {

  render() {
    const { post } = this.props;
    const { id, slug, title, excerpt, date, fimg_url, _embedded: { author, 'wp:term': term } } = post;
    const href = '/post/[slug]';
    const as = `/post/${slug}`;

    return (
      <article className={css.container} itemScope itemType="http://schema.org/Article">
        <meta itemProp="datePublished" content={date} />
        {fimg_url && (
          <div className={css.imgWrap}>
            <meta itemProp="image" content={fimg_url} />
            <div className={css.imgContainer}>
              <Link href={href} as={as}>
                <a className={css.imgLink} style={{ backgroundImage: `url(${fimg_url})` }} itemProp="url" />
              </Link>
            </div>
          </div>
        )}
        <div className={css.body}>
          <h2 className={css.title}>
            <Link href={href} as={as}>
              <a className={css.titleLink} itemProp="url headline name">
                {ReactHtmlParser(title.rendered)}
              </a>
            </Link>
          </h2>
          <div className={css.info}>
            <Author
              {...author[0]}
              date={date}
              img="/static/img/author.png"
            />
          </div>
          <div
            className={css.excerpt}
            dangerouslySetInnerHTML={{ __html: excerpt.rendered.substring(0,200) + '...' }}
          />
          <Categories list={term[0]} />
        </div>
      </article>
    );
  }
}

export default PostPreview;
