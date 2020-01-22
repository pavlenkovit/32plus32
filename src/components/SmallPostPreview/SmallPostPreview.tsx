import React, { FC } from 'react';
import Link from 'next/link';
import ReactHTMLParser from 'react-html-parser';

import DateComponent from './components/DateComponent';
import { IPost } from '../../models/wp';
import Styled from './SmallPostPreview.styled';
import getImgPath from '../../utils/getImgPath';
import useAsImgStyle from '../../hooks/useAsImgStyle';

interface IProps {
  post: IPost;
}

const SmallPostPreview: FC<IProps> = ({ post }) => {
  const { slug, title, date, modified, fimg_url, _embedded: { author, 'wp:featuredmedia': featuredmedia }, meta: { _aioseop_description } } = post;
  const renderedTitle = ReactHTMLParser(title.rendered);
  const href = '/post/[slug]';
  const as = `/post/${slug}`;
  const imgPath = getImgPath(featuredmedia, fimg_url, 'medium');
  const imgParams = useAsImgStyle(imgPath);

  return (
    <Styled.Container itemScope itemType="http://schema.org/Article">
      <meta itemProp="datePublished" content={date} />
      <meta itemProp="dateModified" content={modified} />
      <meta itemProp="description" content={_aioseop_description ? _aioseop_description[0] : ''} />
      {featuredmedia && (
        <Styled.ImgWrap>
          <meta itemProp="image" content={fimg_url} />
          <Styled.ImgContainer>
            <Link href={href} as={as} passHref>
              <Styled.ImgLink {...imgParams} itemProp="url" />
            </Link>
          </Styled.ImgContainer>
        </Styled.ImgWrap>
      )}
      <Styled.Body>
        <Styled.Title>
          <Link href={href} as={as} passHref>
            <Styled.TitleLink itemProp="url headline name">
              {renderedTitle}
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
