import React, { useEffect, useState } from 'react';
import css from './Post.module.scss';
import Author from '../Author';
import Share from '../Share';
import StickyContainer from '../Share/components/StickyContainer';

const Post = (props) => {

  const [ww, updWindowWidth] = useState(0);
  const [newContent, updateContent] = useState(null);
  const { title, content, date, modified, fimg_url, _embedded: { author, 'wp:term': term } } = props;

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

  useEffect(() => {
    const wrapper= document.createElement('div');
    wrapper.innerHTML= content.rendered;
    const elements = wrapper.querySelectorAll('img');
    elements.forEach(el => {
      el.setAttribute('data-src', el.getAttribute('src'));
      el.setAttribute('data-srcset', el.getAttribute('srcset'));
      el.setAttribute('src', '/public/img/dummy.png');
      el.removeAttribute('srcset');
    });
    updateContent(wrapper.outerHTML);
  }, [content]);

  useEffect(() => {
    if (newContent) {
      const observer = new IntersectionObserver((entries) => {
        entries.map(entry => {
          const el = entry.target;
          if (!el.getAttribute('data-src')) {
            observer.unobserve(el);
          }
          if (entry.isIntersecting && el.getAttribute('data-src')) {
            el.setAttribute('src', el.getAttribute('data-src'));
            el.setAttribute('srcset', el.getAttribute('data-srcset'));
            el.removeAttribute('data-src');
            el.removeAttribute('data-srcset');
          }
        })
      }, {
        rootMargin: '0px',
        threshold: 0.15,
      });

      const elements = document.querySelectorAll('#post-container img');

      elements.forEach(el => {
        observer.observe(el);
      });
    }
  }, [newContent]);

  return (
    <article className={css.container} itemScope itemType="http://schema.org/Article">
      <meta itemProp="datePublished" content={date} />
      <meta itemProp="dateModified" content={modified} />
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
      <div
        itemProp="articleBody"
        id="post-container"
        className={css.content}
        dangerouslySetInnerHTML={{ __html: newContent }}
      />
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
