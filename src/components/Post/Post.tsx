import React, { useEffect, useState, FC } from 'react';
import Author from '../Author';
import Share from '../Share';
import StickyContainer from '../Share/components/StickyContainer';
import MainTitle from '../MainTitle';

import Styled from './Post.styled';
import handleObservers from './utils/handleObservers';
import initDataSrc from './utils/initDataSrc';

interface IProps {
  title: any;
  content: any;
  date: string;
  modified: string;
  fimg_url: string;
  _embedded: any;
}

const Post: FC<IProps> = (props) => {
  const [ww, updWindowWidth] = useState(0);
  const [newContent, updateContent] = useState(null);
  const { title, content, date, modified, fimg_url, _embedded: { author } } = props;

  const updateWindowWidth = () => {
    updWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // @ts-ignore
        window.location.hash = this.getAttribute('href');
        window.scrollTo({
          // @ts-ignore
          top: document.querySelector(this.getAttribute('href')).offsetTop + 30,
          behavior: 'smooth',
        });
      });
    });

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  useEffect(() => {
    // @ts-ignore
    updateContent(initDataSrc(content.rendered));
  }, [content]);

  useEffect(() => {
    if (newContent) {
      handleObservers(document.querySelectorAll('#post-container img'));
    }
  }, [newContent]);

  return (
    <article itemScope itemType="http://schema.org/Article">
      <meta itemProp="datePublished" content={date} />
      <meta itemProp="dateModified" content={modified} />
      <MainTitle itemProp="headline name">{title.rendered}</MainTitle>
      <Styled.Info>
        <Author
          {...author[0]}
          date={date}
        />
      </Styled.Info>
      {fimg_url && (
        <div>
          <Styled.Img src={fimg_url} alt={title.rendered} itemProp="image" />
        </div>
      )}
      <Styled.Content
        itemProp="articleBody"
        id="post-container"
        // @ts-ignore
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
