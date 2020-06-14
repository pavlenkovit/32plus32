import React, { FC } from 'react';
import PostPreview from '../PostPreview';
import { IPost } from '../../models/wp';
import StyledWrapper from './PostsList.styled';

interface IProps {
  posts: IPost[];
}

const PostsList: FC<IProps> = ({ posts }) => {
  return (
    <StyledWrapper>
      {posts.map((post, idx) => {
        return (
          <PostPreview key={idx} {...post} />
        );
      })}
    </StyledWrapper>
  );
};

export default PostsList;
