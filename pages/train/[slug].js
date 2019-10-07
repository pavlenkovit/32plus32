import React from 'react';
import fetch from 'isomorphic-unfetch';

import baseURL from '../../constants/baseURL';
import PostFull from '../../scenes/Post';

const Post = (props) => {
  const { train } = props;
  console.log(train);
  return (
    <PostFull {...train} />
  );
};

Post.getInitialProps = async (context) => {
  const { query: { slug } } = context;
  const res = await fetch(`${baseURL}/posts?slug=${slug}&_embed`);
  const data = await res.json();
  const train = data && data.length > 0 ? data[0] : null;
  return { train };
};

export default Post;
