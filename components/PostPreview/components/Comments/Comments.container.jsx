import React, { PureComponent } from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../../../../constants/baseURL';

import Comments from './Comments';

class CommentsContainer extends PureComponent {
  state = { count: 0 };

  async componentDidMount() {
    const { id } = this.props;

    const res = await fetch(`${baseURL}/comments?post=${id}`);
    const data = await res.json();
    this.setState({ count: data.length });
  }

  render() {
    const { count } = this.state;

    return <Comments count={count} />;
  }
}

export default CommentsContainer;
