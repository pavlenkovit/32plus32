import React, { PureComponent } from 'react';

import fetch from 'isomorphic-unfetch';
import baseURL from '../../../../../../constants/baseURL';

import Tag from './Tag';

class TagContainer extends PureComponent {
  state = { tag: null };

  async componentDidMount() {
    const { id } = this.props;
    const res = await fetch(`${baseURL}/tags/${id}`);
    const data = await res.json();
    this.setState({ tag: data });
  }

  render() {
    const { tag } = this.state;

    if (!tag) {
      return null;
    }

    const { name, slug } = tag;

    return <Tag name={name} slug={slug} />;
  }
}

export default TagContainer;
