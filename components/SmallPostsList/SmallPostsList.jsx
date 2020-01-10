import React from 'react';
import css from './SmallPostsList.module.scss';
import SmallPostPreview from '../SmallPostPreview';
import Link from 'next/link';

const SmallPostsList = ({ posts }) => {
  const categories = [];
  posts.forEach(post => {
    const { _embedded: { 'wp:term': term } } = post;
    term[0].forEach(category => {
      const findCat = categories.find(cat => cat.id === category.id);
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

  return categories.map((category) => {
    const { name, slug, _posts } = category;
    const href = `/category/[slug]`;
    const as = `/category/${slug}`;
    return (
      <div className={css.block} key={category.id}>
        <h2 className={css.title}>
          <Link href={href} as={as}>
            <a>{name}</a>
          </Link>
        </h2>
        {_posts.map((post) => {
          return (
            <SmallPostPreview key={post.id} post={post} />
          );
        })}
      </div>
    );
  });
};

export default SmallPostsList;
