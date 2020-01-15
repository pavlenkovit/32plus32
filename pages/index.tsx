import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

import baseURL from '../constants/baseURL';
import CustomHead from '../components/CustomHead';
import PostsList from '../components/PostsList';
import Pagination from '../components/Pagination';
import MainTitle from '../components/MainTitle';
import { IPost } from '../models/post';

interface IProps {
  posts: IPost[];
  page: number;
  totalPages: number;
}

const Index: NextPage<IProps> = (props) => {
  const { posts, totalPages, page } = props;

  const description = 'Сайт о гиревом спорте. Тренировочный план, полезные статьи, техника и описание упражнений с гирями';
  const keywords = 'гиревой спорт, тренировки гиревой спорт, гири, нормативы гиревой спорт';

  return (
    <>
      <CustomHead
        description={description}
        keywords={keywords}
        type="website"
      />
      <MainTitle>Сайт о гиревом спорте 32PLUS32</MainTitle>
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

Index.getInitialProps = async ({ query: { page: p } }) => {
  const page = p ? +p : 1;
  const res = await fetch(`${baseURL}/posts?categories_exclude=77&page=${page}&_embed`);
  const posts = await res.json();
  // @ts-ignore
  const totalPages = +res.headers.get('X-WP-TotalPages');
  return { posts, totalPages, page };
};

export default Index;
