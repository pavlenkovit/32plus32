import React from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';
import Author from '../Author';
import Categories from './components/Categories';

import css from './PostPreview.module.scss';

const PostPreview = ({ post }) => {
  const { slug, title, excerpt, date, modified, fimg_url, _embedded: { author, 'wp:term': term, 'wp:featuredmedia': featuredmedia }, meta: { _aioseop_description } } = post;
  const href = '/post/[slug]';
  const as = `/post/${slug}`;

  const getImgPath = () => {
    if (featuredmedia) {
      const { sizes } = featuredmedia[0].media_details;
      if (sizes.medium_large) {
        return sizes.medium_large.source_url;
      }

      if (sizes['keratin-featured-image-archive']) {
        return sizes['keratin-featured-image-archive'].source_url;
      }
      return fimg_url;
    }
    return null;
  };

  return (
    <article className={css.container} itemScope itemType="http://schema.org/Article">
      <meta itemProp="datePublished" content={date} />
      <meta itemProp="dateModified" content={modified} />
      <meta itemProp="description" content={_aioseop_description ? _aioseop_description[0] : ''} />
      {featuredmedia && (
        <div className={css.imgWrap}>
          <meta itemProp="image" content={fimg_url} />
          <div className={css.imgContainer}>
            <Link href={href} as={as}>
              <a className={css.imgLink} style={{ backgroundImage: `url(${getImgPath()})` }} itemProp="url" />
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
};

export default PostPreview;
