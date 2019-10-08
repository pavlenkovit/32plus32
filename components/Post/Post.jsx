import React from 'react';
import css from './Post.module.scss';
import Author from '../Author';
import Share from '../Share';

const Post = (props) => {

  const { title, content, date, fimg_url, _embedded: { author, 'wp:term': term } } = props;

  return (
    <article className={css.container} itemScope itemType="http://schema.org/Article">
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
      <div className={css.content} dangerouslySetInnerHTML={{__html: content.rendered}} />
      <Share />
    </article>
  );
};

export default Post;
