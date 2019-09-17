import React from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../constants/baseURL';
import Home from '../scenes/Home';

const Index = (props) => {
  const { posts } = props;
  //console.log(posts, 'posts');
  return (
    <Home posts={posts} />
  );
};

Index.getInitialProps = async () => {
  const res = await fetch(`${baseURL}/posts`);
  const data = await res.json();
  return { posts: data };
};

export default Index;
