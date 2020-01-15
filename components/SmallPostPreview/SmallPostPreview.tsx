import React, { FC } from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

import DateComponent from './components/DateComponent';
import { IPost } from '../../models/post';
import Styled from './SmallPostPreview.styled';

interface IProps {
  post: IPost;
}

const SmallPostPreview: FC<IProps> = ({ post }) => {
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
    <Styled.Container itemScope itemType="http://schema.org/Article">
      <meta itemProp="datePublished" content={date} />
      <meta itemProp="dateModified" content={modified} />
      <meta itemProp="description" content={_aioseop_description ? _aioseop_description[0] : ''} />
      {featuredmedia && (
        <Styled.ImgWrap>
          <meta itemProp="image" content={fimg_url} />
          <Styled.ImgContainer>
            <Link href={href} as={as}>
              <Styled.ImgLink style={{ backgroundImage: `url(${getImgPath()})` }} itemProp="url" />
            </Link>
          </Styled.ImgContainer>
        </Styled.ImgWrap>
      )}
      <Styled.Body>
        <Styled.Title>
          <Link href={href} as={as}>
            <Styled.TitleLink itemProp="url headline name">
              {ReactHtmlParser(title.rendered)}
            </Styled.TitleLink>
          </Link>
        </Styled.Title>
        <DateComponent
          {...author[0]}
          date={date}
        />
      </Styled.Body>
    </Styled.Container>
  );
};

export default SmallPostPreview;
