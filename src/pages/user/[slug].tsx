import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

import baseURL from '../../constants/baseURL';
import CustomHead from '../../components/CustomHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import MainTitle from '../../components/MainTitle';
import PostsList from '../../components/PostsList';
import Pagination from '../../components/Pagination';
import { IPost, IUser } from '../../models/wp';
import getTotalPages from '../../utils/getTotalPages';
import { IPaginationProps } from '../../models/pagination';

interface IProps extends IPaginationProps {
  user: IUser;
  posts: IPost[];
}

const UserPage: NextPage<IProps> = ({ user, posts, totalPages, page }) => {
  return (
    <>
      <CustomHead
        title={user.name}
        type="person"
      />
      <Breadcrumbs items={[{ title: user.name }]} />
      <MainTitle>{user.name}</MainTitle>
      <PostsList posts={posts} />
      <Pagination
        total={totalPages}
        activePage={page}
        rootHref="/user/[slug]"
        rootAs={`/user/${user.slug}`}
      />
    </>
  );
};

UserPage.getInitialProps = async (context) => {
  const { query: { slug, page: p } } = context;
  const page = p ? +p : 1;

  const resUser = await fetch(`${baseURL}/users?slug=${slug}`);
  const dataUser = await resUser.json();
  const user = dataUser && dataUser.length > 0 ? dataUser[0] : null;
  const resPosts = await fetch(`${baseURL}/posts?author=${user.id}&categories_exclude=77,94&page=${page}&_embed`);
  const posts = await resPosts.json();
  const totalPages = getTotalPages(resPosts);

  return { user, posts, totalPages, page };
};

export default UserPage;
