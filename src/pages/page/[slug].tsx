import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

import baseURL from '../../constants/baseURL';
import Post from '../../components/Post';
import CustomHead from '../../components/CustomHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import getMeta from '../../utils/getMeta';
import { IPost } from '../../models/wp';

interface IProps {
  page: IPost;
}

const SimplePage: NextPage<IProps> = ({ page }) => {
  const title = page.title.rendered;

  return (
    <>
      <CustomHead
        title={title}
        url={`/page/${page.slug}`}
        type="article"
        {...getMeta(page)}
      />
      <Breadcrumbs />
      <Post {...page} />
    </>
  );
};

SimplePage.getInitialProps = async (context) => {
  const { query: { slug } } = context;
  const res = await fetch(`${baseURL}/pages?slug=${slug}&_embed`);
  const data = await res.json();
  const page = data && data.length > 0 ? data[0] : null;
  return { page };
};

export default SimplePage;
