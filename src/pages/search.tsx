import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

import baseURL from '../constants/baseURL';
import PostsList from '../components/PostsList';
import Pagination from '../components/Pagination';
import Breadcrumbs from '../components/Breadcrumbs';
import MainTitle from '../components/MainTitle';
import { IPost } from '../models/wp';
import getTotalPages from '../utils/getTotalPages';
import { IPaginationProps } from '../models/pagination';
import Container from '../components/Container';

interface IProps extends IPaginationProps {
  posts: IPost[];
  s: any;
}

const Search: NextPage<IProps> = ({ posts, totalPages, page, s }) => {
  return (
    <>
      <Breadcrumbs items={[{ title: `Результаты поиска по запросу: ${s}` }]} />
      <Container>
        <MainTitle>Результаты поиска по запросу: {s}</MainTitle>
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
      </Container>
    </>
  );
};

Search.getInitialProps = async ({ query: { page: p, s } }) => {
  const page = p ? +p : 1;
  const res = await fetch(`${baseURL}/posts?search=${s}&page=${page}&_embed`);
  const posts = await res.json();
  const totalPages = getTotalPages(res);
  return { posts, totalPages, page, s };
};

export default Search;
