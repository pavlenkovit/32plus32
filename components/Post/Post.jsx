import React, { useEffect, useState } from 'react';
import css from './Post.module.scss';
import Author from '../Author';
import Share from '../Share';
import StickyContainer from '../Share/components/StickyContainer';

const Post = (props) => {

  const [ww, updWindowWidth] = useState(0);
  const { title, content, date, fimg_url, _embedded: { author, 'wp:term': term } } = props;

  const updateWindowWidth = () => {
    console.log(window.innerWidth);
    updWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log('use start');
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      console.log('use end');
      window.removeEventListener('resize', updateWindowWidth);
    }
  }, []);

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
          date={date}
        />
      </div>
      {fimg_url && (
        <div className={css.imgWrapper}>
          <img className={css.img} src={fimg_url} alt="" />
        </div>
      )}
      <div className={css.content} dangerouslySetInnerHTML={{__html: content.rendered}} />
      {ww > 1350 ? (
        <StickyContainer>
          <Share />
        </StickyContainer>
      ) : (
        <Share isInline />
      )}
    </article>
  );
};

export default Post;
