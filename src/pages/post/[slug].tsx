import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import ReactHTMLParser from 'react-html-parser';

import baseURL from '../../constants/baseURL';
import Post from '../../components/Post';
import Breadcrumbs from '../../components/Breadcrumbs';
import CustomHead from '../../components/CustomHead';
import getMeta from '../../utils/getMeta';
import { IPost } from '../../models/wp';
import SmallContainer from '../../components/SmallContainer';

interface IProps {
  post: IPost;
}

const PostPage: NextPage<IProps> = ({ post }) => {
  const title = ReactHTMLParser(post.title.rendered)[0];

  return (
    <SmallContainer>
      <CustomHead
        title={title}
        url={`/post/${post.slug}`}
        type="article"
        {...getMeta(post)}
      />
      <Breadcrumbs
        items={[
          {
            title: 'Блог',
            href: '/blog',
            as: '/blog',
          },
        ]}
      />
      <Post {...post} />
    </SmallContainer>
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
