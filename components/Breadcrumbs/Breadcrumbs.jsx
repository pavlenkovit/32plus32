import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import css from './Breadcrumbs.module.scss';
import Container from '../Container';
import Link from 'next/link';

const Breadcrumbs = ({ items }) => {
  const [root, updRoot] = useState(null);

  const el = () => {
    return (
      <div className={css.container}>
        <Container>
          <ul className={css.list} itemScope itemType="http://schema.org/BreadcrumbList">
            <li className={css.item} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
              <Link href="/">
                <a className={css.link} itemProp="item">
                  <span itemprop="name">Главная</span>
                </a>
              </Link>
            </li>
            {items.map((item, idx) => {
              return item.href ? (
                <li key={idx} className={css.item} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                  <Link href={item.href} as={item.as}>
                    <a className={css.link} itemProp="item">
                      <span itemprop="name">{item.title}</span>
                    </a>
                  </Link>
                </li>
              ) : (
                <li key={idx} className={css.item}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    )
  };

  useEffect(() => {
    updRoot(document.querySelector('#breadcrumbs'));
  }, [root]);

  if (!root) {
    return null;
  }

  return ReactDOM.createPortal(el(), root);
};

export default Breadcrumbs;
