import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import fetch from 'isomorphic-unfetch';
import baseURL from '../../../../../../constants/baseURL';

import Category from './Category';

class CategoryContainer extends PureComponent {
  state = { category: null };

  async componentDidMount() {
    const { id } = this.props;
    const res = await fetch(`${baseURL}/categories/${id}`);
    const data = await res.json();
    this.setState({ category: data });
  }

  render() {
    const { category } = this.state;

    if (!category) {
      return null;
    }

    const { name, slug } = category;

    return <Category name={name} slug={slug} />;
  }
}

CategoryContainer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CategoryContainer;
