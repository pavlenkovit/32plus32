import React from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../constants/baseURL';
import Category from '../scenes/Category';

const CategoryPage = (props) => {
  const { category, posts, totalPages, page } = props;
  // console.log(category, 'category');
  console.log(posts, 'posts');
  return (
    <Category posts={posts} category={category} totalPages={totalPages} page={page} />
  );
};

CategoryPage.getInitialProps = async (context) => {
  const { query, req } = context;

  let slug = '';
  let page = 1;
  if (query.slug) { // переходы внутри сайта
    slug = context.query.slug;
  }
  if (query.page) { // переходы внутри сайта
    page = +context.query.page;
  }
  if (req && req.params) { // прямой переход по ссылке
    if (req.params.slug) {
      slug = req.params.slug;
    }
    if (req.params.page) {
      page = +req.params.page;
    }
  }

  const resCat = await fetch(`${baseURL}/categories?slug=${slug}`);
  const dataCat = await resCat.json();
  const category = dataCat && dataCat.length > 0 ? dataCat[0] : null;
  const resPosts = await fetch(`${baseURL}/posts?categories=${category.id}&page=${page}&_embed`);
  const posts = await resPosts.json();
  const totalPages = +resPosts.headers.get('X-WP-TotalPages');

  return { category, posts, totalPages, page };
};

export default CategoryPage;
