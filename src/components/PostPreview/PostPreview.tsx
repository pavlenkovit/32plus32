import React, { FC } from 'react';
import Link from 'next/link';
import ReactHTMLParser from 'react-html-parser';

import Author from '../Author';
import Categories from './components/Categories';

import Styled from './PostPreview.styled';
import { IPost } from '../../models/wp';
import getImgPath from '../../utils/getImgPath';
import useAsImgStyle from '../../hooks/useAsImgStyle';

interface IProps {
  post: IPost;
}

const PostPreview: FC<IProps> = ({ post }) => {
  const { slug, title, excerpt, date, modified, fimg_url, _embedded: { author, 'wp:term': term, 'wp:featuredmedia': featuredmedia }, meta: { _aioseop_description } } = post;
  const renderTitle = ReactHTMLParser(title.rendered);
  const href = '/post/[slug]';
  const as = `/post/${slug}`;
  const imgPath = getImgPath(featuredmedia, fimg_url, 'medium_large');
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
            <Link href={href} as={as}>
              <Styled.ImgLink {...imgParams} itemProp="url" />
            </Link>
          </Styled.ImgContainer>
        </Styled.ImgWrap>
      )}
      <Styled.Body>
        <Styled.Title>
          <Link href={href} as={as}>
            <Styled.TitleLink itemProp="url headline name">
              {renderTitle}
            </Styled.TitleLink>
          </Link>
        </Styled.Title>
        <Styled.Info>
          <Author
            {...author[0]}
            date={date}
          />
        </Styled.Info>
        <Styled.Excerpt dangerouslySetInnerHTML={{ __html: `${excerpt.rendered.substring(0, 200)}...` }} />
        <Categories list={term[0]} />
      </Styled.Body>
    </Styled.Container>
  );
};

export default PostPreview;
