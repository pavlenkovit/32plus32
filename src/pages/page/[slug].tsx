import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

import baseURL from '../../constants/baseURL';
import Post from '../../components/Post';
import CustomHead from '../../components/CustomHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import getMeta from '../../utils/getMeta';
import { IPost } from '../../models/wp';
import SmallContainer from '../../components/SmallContainer';

interface IProps {
  page: IPost;
}

const SimplePage: NextPage<IProps> = ({ page }) => {
  return (
    <SmallContainer>
      <CustomHead
        title={page.title.rendered}
        url={`/page/${page.slug}`}
        type="article"
        {...getMeta(page)}
      />
      <Breadcrumbs />
      <Post {...page} />
    </SmallContainer>
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
