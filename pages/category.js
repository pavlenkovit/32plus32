import React from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../constants/baseURL';
import Category from '../scenes/Category';

const CategoryPage = (props) => {
  const { category, posts } = props;
  console.log(category, 'category');
  console.log(posts, 'posts');
  return (
    <Category posts={posts} category={category} />
  );
};

CategoryPage.getInitialProps = async (context) => {
  const { query: { slug } } = context;
  const resCat = await fetch(`${baseURL}/categories?slug=${slug}`);
  const dataCat = await resCat.json();
  const category = dataCat && dataCat.length > 0 ? dataCat[0] : null;
  const resPosts = await fetch(`${baseURL}/posts?categories=${category.id}&_embed`);
  const posts = await resPosts.json();

  return { category, posts };
};

export default CategoryPage;
