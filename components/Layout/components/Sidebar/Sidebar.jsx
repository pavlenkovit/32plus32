import React, { PureComponent } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import css from './Sidebar.module.scss';
import baseURL from '../../../../constants/baseURL';

class Sidebar extends PureComponent {
  state = { categories: [] };

  async componentDidMount() {
    const res = await fetch(`${baseURL}/categories`);
    const data = await res.json();
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className={css.container}>
        <ul>
          {categories.map((category, idx) => {
            return (
              <li key={idx}>
                <Link href={`/category?slug=${category.slug}`} as={`/category/${category.slug}`}>
                  <a>{category.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
