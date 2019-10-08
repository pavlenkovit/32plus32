import React from 'react';
import css from './PostsList.module.scss';
import PostPreview from '../PostPreview';

const PostsList = ({ posts }) => {
  return (
    <div>
      {posts.map((post, idx) => {
        return (
          <PostPreview key={idx} post={post} />
        );
      })}
    </div>
  );
};

export default PostsList;
