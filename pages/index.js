import React from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../constants/baseURL';
import Home from '../scenes/Home';

const Index = (props) => {
  const { posts, totalPages, page, query } = props;
  console.log(posts, 'posts');
  return (
    <Home posts={posts} totalPages={totalPages} page={page} />
  );
};

Index.getInitialProps = async (context) => {
  const { query: { page } } = context;
  const targetPage = page ? +page : 1;
  const res = await fetch(`${baseURL}/posts?categories_exclude=77&page=${targetPage}&_embed`);
  const posts = await res.json();
  const totalPages = +res.headers.get('X-WP-TotalPages');
  return { posts, totalPages, page: targetPage, query: context.query };
};

export default Index;
