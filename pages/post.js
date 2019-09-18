import React from 'react';
import fetch from 'isomorphic-unfetch';

import baseURL from '../constants/baseURL';
import PostFull from '../scenes/Post';

const Post = (props) => {
  const { post, slug } = props;
  console.log(post);
  console.log(slug, 'slug');
  return (
    <PostFull {...post} />
  );
};

Post.getInitialProps = async (context) => {
  const { query: { slug } } = context;
  const res = await fetch(`${baseURL}/posts?slug=${slug}`);
  const data = await res.json();
  const post = data && data.length > 0 ? data[0] : null;
  return { post, slug };
};

export default Post;
