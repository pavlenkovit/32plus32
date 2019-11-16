import React from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../constants/baseURL';
import CustomHead from '../components/CustomHead';
import PostsList from '../components/PostsList';
import Pagination from '../components/Pagination';

const Index = (props) => {
  const { posts, totalPages, page } = props;

  const description = 'Сайт о гиревом спорте. Тренировочный план, полезные статьи, техника и описание упражнений с гирями';
  const keywords = 'гиревой спорт, тренировки гиревой спорт, гири, нормативы гиревой спорт';

  return (
    <>
      <CustomHead
        description={description}
        keywords={keywords}
        img=""
      />
      <PostsList posts={posts} />
      <Pagination
        total={totalPages}
        activePage={page}
        rootHref="/"
        rootAs="/"
      />
    </>
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
