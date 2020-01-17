import React, { FC } from 'react';
import Link from 'next/link';

import SmallPostPreview from '../SmallPostPreview';
import Styled from './SmallPostsList.styled';
import { IPost } from '../../models/wp';

interface IProps {
  posts: IPost[];
}

const SmallPostsList: FC<IProps> = ({ posts }) => {
  interface ICategory {
    id: number;
    name: string;
    slug: string;
    _posts: IPost[];
  }

  const categories: ICategory[] = [];
  posts.forEach((post) => {
    const { _embedded: { 'wp:term': term } } = post;
    term[0].forEach((category: any) => {
      const findCat = categories.find((cat) => cat.id === category.id);
      if (!findCat) {
        categories.push({
          ...category,
          _posts: [post],
        });
      } else {
        findCat._posts.push(post);
      }
    });
  });

  return (
    <>
      {categories.map((category) => {
        const { name, slug, _posts } = category;
        const href = '/category/[slug]';
        const as = `/category/${slug}`;
        return (
          <Styled.Block key={category.id}>
            <Styled.Title>
              <Link href={href} as={as}>
                <a>{name}</a>
              </Link>
            </Styled.Title>
            {_posts.map((post) => {
              return (
                <SmallPostPreview key={post.id} post={post} />
              );
            })}
          </Styled.Block>
        );
      })}
    </>
  );
};

export default SmallPostsList;
