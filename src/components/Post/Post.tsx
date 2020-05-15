import React, { FC, useEffect, useRef } from 'react';
import ReactHTMLParser from 'react-html-parser';

import Author from '../Author';
import Share from '../Share';
import StickyContainer from '../Share/components/StickyContainer';
import MainTitle from '../MainTitle';
import { IPost } from '../../models/wp';
import useImgParams from '../../hooks/useImgParams';
import useWindowWidth from '../../hooks/useWindowWidth';

import Styled from './Post.styled';

const Post: FC<IPost> = (props) => {
  const { title, content, date, modified, fimg_url, _embedded: { author } } = props;
  const renderedTitle: any = ReactHTMLParser(title.rendered)[0];
  const imgParams = useImgParams(fimg_url);
  const windowWidth = useWindowWidth();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // вверху статьи
    // @ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <article itemScope itemType="http://schema.org/Article">
      <meta itemProp="datePublished" content={date} />
      <meta itemProp="dateModified" content={modified} />
      <MainTitle itemProp="headline name">{renderedTitle}</MainTitle>
      <Styled.Info>
        <Author
          {...author[0]}
          date={date}
        />
      </Styled.Info>
      {fimg_url && (
        <div>
          <Styled.Img {...imgParams} alt={renderedTitle} itemProp="image" />
        </div>
      )}

      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2490800653471089"
        data-ad-slot="6823539128"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />

      <Styled.Content
        itemProp="articleBody"
        ref={container}
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      />
      {windowWidth > 1060 && (
        <StickyContainer>
          <Share />
        </StickyContainer>
      )}
      {(windowWidth && windowWidth <= 1060) && (
        <Share isInline />
      )}
    </article>
  );
};

export default Post;
