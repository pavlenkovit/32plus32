import React, { FC } from 'react';
import Link from 'next/link';
import Author from '../Author';
import Categories from './components/Categories';

import Styled from './PostPreview.styled';
import { IPost } from '../../models/wp';

interface IProps {
  post: IPost;
}

const PostPreview: FC<IProps> = ({ post }) => {
  const { slug, title, excerpt, date, modified, fimg_url, _embedded: { author, 'wp:term': term, 'wp:featuredmedia': featuredmedia }, meta: { _aioseop_description } } = post;
  const href = '/post/[slug]';
  const as = `/post/${slug}`;

  const getImgPath = () => {
    if (featuredmedia) {
      const { sizes } = featuredmedia[0].media_details;
      if (sizes.medium_large) {
        return sizes.medium_large.source_url;
      }

      if (sizes['keratin-featured-image-archive']) {
        return sizes['keratin-featured-image-archive'].source_url;
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
              {title.rendered}
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
