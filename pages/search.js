import React from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../constants/baseURL';
import PostsList from '../components/PostsList';
import Pagination from '../components/Pagination';
import Breadcrumbs from '../components/Breadcrumbs';
import MainTitle from '../components/MainTitle';

const Index = (props) => {
  const { posts, totalPages, page, s } = props;
  console.log(posts, 'posts');

  return (
    <>
      <Breadcrumbs items={[{ title: `Результаты поиска по запросу: "${s}"` }]} />
      <MainTitle>Результаты поиска по запросу: "{s}"</MainTitle>
      {posts.length === 0 ? (
        <p>Извините, по вашему запросу ничего не найдено :/</p>
      ) : (
        <>
          <PostsList posts={posts} />
          <Pagination
          total={totalPages}
          activePage={page}
          rootHref="/search"
          rootAs="/search"
          />
        </>
      )}
    </>
  );
};

Index.getInitialProps = async (context) => {
  const { query: { page: p, s } } = context;
  const page = p ? +p : 1;
  const res = await fetch(`${baseURL}/posts?search=${s}&page=${page}&_embed`);
  const posts = await res.json();
  const totalPages = +res.headers.get('X-WP-TotalPages');
  return { posts, totalPages, page, s };
};

export default Index;
