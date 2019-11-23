import React from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../../constants/baseURL';
import CustomHead from '../../components/CustomHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import MainTitle from '../../components/MainTitle';
import PostsList from '../../components/PostsList';
import Pagination from '../../components/Pagination';

const CategoryPage = (props) => {
  const { category, posts, totalPages, page } = props;

  return (
    <>
      <CustomHead
        title={category.name}
        type="blog.category"
      />
      <Breadcrumbs items={[{ title: category.name }]} />
      <MainTitle>{category.name}</MainTitle>
      <PostsList posts={posts} />
      <Pagination
        total={totalPages}
        activePage={page}
        rootHref={'/category/[slug]'}
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
  const totalPages = +resPosts.headers.get('X-WP-TotalPages');

  return { category, posts, totalPages, page };
};

export default CategoryPage;
