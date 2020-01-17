import React, { FC } from 'react';
import PostPreview from '../PostPreview';
import { IPost } from '../../models/wp';

interface IProps {
  posts: IPost[];
}

const PostsList: FC<IProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post, idx) => {
        return (
          <PostPreview key={idx} post={post} />
        );
      })}
    </>
  );
};

export default PostsList;
