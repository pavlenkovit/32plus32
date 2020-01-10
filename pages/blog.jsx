import React from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../constants/baseURL';
import CustomHead from '../components/CustomHead';
import Breadcrumbs from '../components/Breadcrumbs';
import SmallPostsList from '../components/SmallPostsList';
import MainTitle from '../components/MainTitle';

const Blog = (props) => {
  const { posts } = props;

  const title = 'Блог';
  const description = 'Все статьи по гиревому спорту - тренировки, техника, упражнения, личности, научные статьи';
  const keywords = 'гиревой спорт статьи, статья гиревой спорт, гиревой спорт блог';

  return (
    <>
      <CustomHead
        title={title}
        description={description}
        keywords={keywords}
        type="blog"
      />
      <Breadcrumbs items={[{ title }]} />
      <MainTitle>{title}</MainTitle>
      <SmallPostsList posts={posts} />
    </>
  );
};

Blog.getInitialProps = async () => {
  const res = await fetch(`${baseURL}/posts?categories_exclude=77&per_page=100&_embed`);
  const posts = await res.json();
  return { posts };
};

export default Blog;
