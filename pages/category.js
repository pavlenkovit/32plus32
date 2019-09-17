import React from 'react';
import fetch from 'isomorphic-unfetch';

import baseURL from '../constants/baseURL';
import {Col, Row} from 'react-grid-system';
import PostPreview from '../components/PostPreview';

const Category = (props) => {
  const { category, posts, tested } = props;
  console.log(category, 'category');
  console.log(posts, 'posts');
  return (
    <div>
      <h1>{category.name}</h1>
      <Row>
        {posts.map((post, idx) => {
          return (
            <Col key={idx} md={6}>
              <PostPreview post={post} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

Category.getInitialProps = async (context) => {
  const { query: { slug } } = context;
  const resCat = await fetch(`${baseURL}/categories?slug=${slug}`);
  const dataCat = await resCat.json();
  const category = dataCat && dataCat.length > 0 ? dataCat[0] : null;
  const resPosts = await fetch(`${baseURL}/posts?categories=${category.id}`);
  const posts = await resPosts.json();

  return { category, posts };
};

export default Category;
