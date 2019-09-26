import React from 'react';
import css from './Category.module.scss';
import PostPreview from '../../components/PostPreview';
import Categories from './components/Categories';
import CustomHead from '../../components/CustomHead';

const Category = ({ posts, category }) => {
  return (
    <div>
      <CustomHead title={category.name} />
      <h1>{category.name}</h1>
      <Categories activeSlug={category.slug} />
      <div>
        {posts.map((post, idx) => {
          return (
            <PostPreview key={idx} post={post} />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
