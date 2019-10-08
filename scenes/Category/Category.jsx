import React from 'react';
import css from './Category.module.scss';
import PostPreview from '../../components/PostPreview';
import CustomHead from '../../components/CustomHead';
import Pagination from '../../components/Pagination';
import Breadcrumbs from '../../components/Breadcrumbs';
import ReactHtmlParser from 'react-html-parser';
import MainTitle from '../../components/MainTitle';

const Category = ({ posts, category, totalPages, page }) => {
  return (
    <div>
      <CustomHead title={category.name} />
      <Breadcrumbs
        items={[
          {
            title: category.name,
          }
        ]}
      />
      <MainTitle>{category.name}</MainTitle>
      <div>
        {posts.map((post, idx) => {
          return (
            <PostPreview key={idx} post={post} />
          );
        })}
      </div>
      <Pagination
        total={totalPages}
        activePage={page}
        rootHref={'/category/[slug]'}
        rootAs={`/category/${category.slug}`}
      />
    </div>
  );
};

export default Category;
