import React from 'react';
import { Row, Col } from 'react-grid-system';
import PostPreview from '../../components/PostPreview';
// import css from './Home.module.scss';

const Home = ({ posts }) => {
  return (
    <Row>
      {posts.map((post, idx) => {
        return (
          <Col key={idx} md={6}>
            <PostPreview post={post} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Home;
