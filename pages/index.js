import React from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../constants/baseURL';
import Home from '../scenes/Home';

const Index = (props) => {
  const { posts, totalPages, page } = props;
  console.log(posts, 'posts');
  return (
    <Home posts={posts} totalPages={totalPages} page={page} />
  );
};

Index.getInitialProps = async (context) => {
  const { query: { page: p } } = context;
  const page = p ? +p : 1;

  const res = await fetch(`${baseURL}/posts?categories_exclude=77&page=${page}&_embed`);
  const posts = await res.json();
  const totalPages = +res.headers.get('X-WP-TotalPages');
  return { posts, totalPages, page };
};

export default Index;
