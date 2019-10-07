import React from 'react';
import css from './Category.module.scss';
import PostPreview from '../../components/PostPreview';
import CustomHead from '../../components/CustomHead';
import Pagination from '../../components/Pagination';
import Breadcrumbs from '../../components/Breadcrumbs';
import ReactHtmlParser from 'react-html-parser';

const list = [
  {
    title: 'Научные статьи',
    slug: 'nauchnye-stati',
  },
  {
    title: 'Планирование',
    slug: 'planirovanie-trenirovok',
  },
  {
    title: 'Упражнения',
    slug: 'upragneniya',
  },
  {
    title: 'Техника',
    slug: 'tehnika',
  },
  {
    title: 'Тренинг',
    slug: 'trenirovki',
  },
  {
    title: 'Восстановление',
    slug: 'vosstanovlenie',
  },
  {
    title: 'Личности',
    slug: 'lichnosti',
  },
];

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
      <h1>{category.name}</h1>
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
