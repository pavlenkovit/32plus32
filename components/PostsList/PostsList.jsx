import React from 'react';
import cn from 'classnames';
import css from './PostsList.module.scss';
import PostPreview from '../PostPreview';
import TopArticle from '../../yandexRTB/TopArticle';
import BottomArticle from '../../yandexRTB/BottomArticle';

const PostsList = ({ posts }) => {
  return (
    <div>
      <div className={cn(css.ad, css.adTop)}>
        <TopArticle />
      </div>
      {posts.map((post, idx) => {
        return (
          <PostPreview key={idx} post={post} />
        );
      })}
      <div className={css.ad}>
        <BottomArticle />
      </div>
    </div>
  );
};

export default PostsList;
