import React from 'react';
import { Row, Col } from 'react-grid-system';
import fetch from 'isomorphic-unfetch';

import baseURL from '../constants/baseURL';
import PostPreview from '../components/PostPreview';

const Index = (props) => {
  const { posts } = props;
  console.log(posts, 'posts');
  return (
    <div>
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

Index.getInitialProps = async (context) => {
  const res = await fetch(`${baseURL}/posts`);
  const data = await res.json();
  return { posts: data };
};

export default Index;
