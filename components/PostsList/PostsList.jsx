import React from 'react';
import PostPreview from '../PostPreview';

const PostsList = ({ posts }) => {
  return posts.map((post, idx) => {
    return (
      <PostPreview key={idx} post={post} />
    );
  });
};

export default PostsList;
