import React, { PureComponent } from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../../../../constants/baseURL';

import Author from './Author';

class AuthorContainer extends PureComponent {
  state = { author: null };

  async componentDidMount() {
    const { id } = this.props;

    const res = await fetch(`${baseURL}/users/${id}`);
    const data = await res.json();
    this.setState({ author: data });
  }

  render() {
    const { children } = this.props;
    const { author } = this.state;

    console.log(author);

    if (!author) {
      return null;
    }

    const { name, slug } = author;

    return <Author name={name} img="/static/img/author.png" slug={slug}>{children}</Author>;
  }
}

export default AuthorContainer;
