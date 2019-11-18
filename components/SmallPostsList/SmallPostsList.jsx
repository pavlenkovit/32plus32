import React from 'react';
import cn from 'classnames';
import css from './SmallPostsList.module.scss';
import TopArticle from '../../yandexRTB/TopArticle';
import BottomArticle from '../../yandexRTB/BottomArticle';
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

  return (
    <div>
      <div className={cn(css.ad, css.adTop)}>
        <TopArticle />
      </div>
      {categories.map((category) => {
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
      })}
      <div className={css.ad}>
        <BottomArticle />
      </div>
    </div>
  );
};

export default SmallPostsList;
