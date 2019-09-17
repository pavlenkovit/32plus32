import React, { FC } from 'react';
import { Row, Col } from 'react-grid-system';
import PostPreview from '../../components/PostPreview';
// @ts-ignore
// import css from './Home.module.scss';

interface IProps {
  posts: any[];
}

const Home: FC<IProps> = ({ posts }) => {
  return (
    <Row>
      {posts.map((post: any, idx: number) => {
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
