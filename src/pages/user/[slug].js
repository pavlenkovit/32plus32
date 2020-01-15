import React from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../../constants/baseURL';
import CustomHead from '../../components/CustomHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import MainTitle from '../../components/MainTitle';
import PostsList from '../../components/PostsList';
import Pagination from '../../components/Pagination';

const UserPage = (props) => {
  const { user, posts, totalPages, page } = props;
  console.log(user, 'user');
  console.log(posts, 'posts');

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
        rootHref={'/user/[slug]'}
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
  const resPosts = await fetch(`${baseURL}/posts?author=${user.id}&categories_exclude=77&page=${page}&_embed`);
  const posts = await resPosts.json();
  const totalPages = +resPosts.headers.get('X-WP-TotalPages');

  return { user, posts, totalPages, page };
};

export default UserPage;
