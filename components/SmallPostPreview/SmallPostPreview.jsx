import React from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

import css from './SmallPostPreview.module.scss';
import DateComponent from './components/DateComponent';

const SmallPostPreview = ({ post }) => {
  const { slug, title, date, modified, fimg_url, _embedded: { author, 'wp:featuredmedia': featuredmedia }, meta: { _aioseop_description } } = post;
  const href = '/post/[slug]';
  const as = `/post/${slug}`;

  const getImgPath = () => {
    if (featuredmedia) {
      const { sizes } = featuredmedia[0].media_details;
      if (sizes.medium) {
        return sizes.medium.source_url;
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
        <h3 className={css.title}>
          <Link href={href} as={as}>
            <a className={css.titleLink} itemProp="url headline name">
              {ReactHtmlParser(title.rendered)}
            </a>
          </Link>
        </h3>
        <DateComponent
          {...author[0]}
          date={date}
        />
      </div>
    </article>
  );
};

export default SmallPostPreview;
