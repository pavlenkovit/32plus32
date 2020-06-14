import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

import baseURL from '../../constants/baseURL';
import CustomHead from '../../components/CustomHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import MainTitle from '../../components/MainTitle';
import PostsList from '../../components/PostsList';
import Pagination from '../../components/Pagination';
import { ICategory, IPost } from '../../models/wp';
import getTotalPages from '../../utils/getTotalPages';
import { IPaginationProps } from '../../models/pagination';

interface IProps extends IPaginationProps {
  category: ICategory;
  posts: IPost[];
}

const CategoryPage: NextPage<IProps> = (props) => {
  const { category, posts, totalPages, page } = props;

  return (
    <>
      <CustomHead
        title={category.name}
        type="blog.category"
      />
      <Breadcrumbs />
      <MainTitle>{category.name}</MainTitle>
      <PostsList posts={posts} />
      <Pagination
        total={totalPages}
        activePage={page}
        rootHref="/category/[slug]"
        rootAs={`/category/${category.slug}`}
      />
    </>
  );
};

CategoryPage.getInitialProps = async (context) => {
  const { query: { slug, page: p } } = context;
  const page = p ? +p : 1;

  const resCat = await fetch(`${baseURL}/categories?slug=${slug}`);
  const dataCat = await resCat.json();
  const category = dataCat && dataCat.length > 0 ? dataCat[0] : null;
  const resPosts = await fetch(`${baseURL}/posts?categories=${category.id}&page=${page}&_embed`);
  const posts = await resPosts.json();
  const totalPages = getTotalPages(resPosts);

  return { category, posts, totalPages, page };
};

export default CategoryPage;
