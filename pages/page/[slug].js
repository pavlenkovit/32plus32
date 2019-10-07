import React from 'react';
import fetch from 'isomorphic-unfetch';

import baseURL from '../../constants/baseURL';
import PostFull from '../../scenes/Post';

const Page = (props) => {
  const { page } = props;
  console.log(page);
  return (
    <PostFull {...page} />
  );
};

Page.getInitialProps = async (context) => {
  const { query: { slug } } = context;
  const res = await fetch(`${baseURL}/pages?slug=${slug}&_embed`);
  const data = await res.json();
  const page = data && data.length > 0 ? data[0] : null;
  return { page };
};

export default Page;
