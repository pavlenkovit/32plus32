import React from 'react';
import fetch from 'isomorphic-unfetch';

import baseURL from '../../constants/baseURL';
import Post from '../../components/Post';
import ReactHtmlParser from 'react-html-parser';
import Breadcrumbs from '../../components/Breadcrumbs';
import CustomHead from '../../components/CustomHead';
import getMeta from '../../utils/getMeta';

const PostPage = (props) => {
  const { post } = props;
  console.log(post);

  const title = ReactHtmlParser(post.title.rendered);

  return (
    <>
      <CustomHead
        title={title}
        { ...getMeta(post) }
      />
      <Breadcrumbs items={[{ title }]} />
      <Post {...post} />
    </>
  );
};

PostPage.getInitialProps = async (context) => {
  const { query: { slug } } = context;
  const res = await fetch(`${baseURL}/posts?slug=${slug}&_embed`);
  const data = await res.json();
  const post = data && data.length > 0 ? data[0] : null;
  return { post };
};

export default PostPage;
