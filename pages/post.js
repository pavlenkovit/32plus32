import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import fetch from 'isomorphic-unfetch';

import baseURL from '../constants/baseURL';
import PostFull from '../components/PostFull';

const Post = (props) => {
  const { post } = props;
  return (
    <PostFull {...post} />
  );
};

Post.getInitialProps = async (context) => {
  const { query: { slug } } = context;
  const res = await fetch(`${baseURL}/posts?slug=${slug}`);
  const data = await res.json();
  const post = data && data.length > 0 ? data[0] : null;
  return { post };
};

export default Post;
