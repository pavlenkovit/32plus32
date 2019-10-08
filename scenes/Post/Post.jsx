import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import css from './Post.module.scss';
import Author from '../../components/Author';
import CustomHead from '../../components/CustomHead';
import Share from '../../components/Share';
import Breadcrumbs from '../../components/Breadcrumbs';

const Post = (props) => {

  const { title, content, date, fimg_url,
    _embedded: { author, 'wp:term': term },
    meta: { _aioseop_description, _aioseop_keywords },
  } = props;

  const metaDescription = _aioseop_description ? _aioseop_description[0] : '';
  const metaKeywords = _aioseop_keywords ? _aioseop_keywords[0] : '';


  return (
    <article className={css.container} itemScope itemType="http://schema.org/Article">
      <CustomHead
        title={ReactHtmlParser(title.rendered)}
        description={metaDescription}
        keywords={metaKeywords}
        imgKey={fimg_url}
      />
      <Breadcrumbs
        items={[
          {
            title: 'Статьи',
            href: '/',
            as: '/',
          },
          {
            title: ReactHtmlParser(title.rendered),
          }
        ]}
      />
      <h1
        className={css.title}
        dangerouslySetInnerHTML={{__html: title.rendered}}
        itemProp="headline name"
      />
      <div className={css.info}>
        <Author
          {...author[0]}
          img="/static/img/author.png"
          date={date}
        />
      </div>
      {fimg_url && (
        <div className={css.imgWrapper}>
          <img className={css.img} src={fimg_url} alt="" />
        </div>
      )}
      <div dangerouslySetInnerHTML={{__html: content.rendered}} />
      <Share />
    </article>
  );
};

export default Post;
