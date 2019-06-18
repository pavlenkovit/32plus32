import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import fetch from 'isomorphic-unfetch';

import baseURL from '../constants/baseURL';

const Post = (props) => {
  const { post } = props;
  console.log(post, 'post');
  return (
    <div>
      <h1>
        {ReactHtmlParser(post.title.rendered)}
      </h1>
      <div>
        {ReactHtmlParser(post.content.rendered)}
      </div>
    </div>
  );
};

Post.getInitialProps = async (context) => {
  const { query: { slug } } = context;
  const res = await fetch(`${baseURL}/posts?slug=${slug}`);
  const data = await res.json();
  console.log(data, 'data');
  const post = data.length > 0 ? data[0] : null;
  return { post };
};

export default Post;
