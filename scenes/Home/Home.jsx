import React from 'react';
import PostPreview from '../../components/PostPreview';
import CustomHead from '../../components/CustomHead';
import Pagination from '../../components/Pagination';
import css from './Home.module.scss';

const Home = ({ posts, totalPages, page }) => {
  return (
    <>
      <CustomHead
        description="Сайт о гиревом спорте"
      />
      {posts.map((post, idx) => {
        return (
          <PostPreview key={idx} post={post} />
        );
      })}
      <Pagination
        total={totalPages}
        activePage={page}
        rootHref="/"
        rootAs="/"
      />
    </>
  );
};

export default Home;
