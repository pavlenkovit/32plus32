import React, { useEffect, useState } from 'react';
import css from './Post.module.scss';
import Author from '../Author';
import Share from '../Share';
import StickyContainer from '../Share/components/StickyContainer';
import TopArticle from '../../yandexRTB/TopArticle';
import BottomArticle from '../../yandexRTB/BottomArticle';

const Post = (props) => {

  const [ww, updWindowWidth] = useState(0);
  const { title, content, date, fimg_url, _embedded: { author, 'wp:term': term } } = props;

  const updateWindowWidth = () => {
    updWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        window.location.hash = this.getAttribute('href');
        window.scrollTo({
          top: document.querySelector(this.getAttribute('href')).offsetTop + 30,
          behavior: 'smooth',
        });
      });
    });

    return () => {
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
          <img className={css.img} src={fimg_url} alt={title.rendered} itemProp="image" />
        </div>
      )}
      <div className={css.ad}>
        <TopArticle />
      </div>
      <div itemProp="articleBody" className={css.content} dangerouslySetInnerHTML={{__html: content.rendered}} />
      <div className={css.ad}>
        <BottomArticle />
      </div>
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
