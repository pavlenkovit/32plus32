import React from 'react';
import PostPreview from '../../components/PostPreview';
import CustomHead from '../../components/CustomHead';
// import css from './Home.module.scss';

const Home = ({ posts }) => {
  return (
    <>
      <CustomHead />
      {posts.map((post, idx) => {
        return (
          <PostPreview key={idx} post={post} />
        );
      })}
    </>
  );
};

export default Home;
