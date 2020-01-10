import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Container from '../Container';
import Link from 'next/link';

import { Wrapper, List, Item } from './Breadcrumbs.styled';

const Breadcrumbs = ({ items }) => {
  const [root, updRoot] = useState(null);

  useEffect(() => {
    updRoot(document.querySelector('#breadcrumbs'));
  }, []);

  if (!root) {
    return null;
  }

  return ReactDOM.createPortal((
    <Wrapper>
      <Container>
        <List itemScope itemType="http://schema.org/BreadcrumbList">
          <Item itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <Link href="/">
              <a itemProp="item">
                <span itemProp="name">Главная</span>
              </a>
            </Link>
          </Item>
          {items.map((item, idx) => {
            return item.href ? (
              <Item key={idx} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <Link href={item.href} as={item.as}>
                  <a itemProp="item">
                    <span itemProp="name">{item.title}</span>
                  </a>
                </Link>
              </Item>
            ) : (
              <Item key={idx}>
                {item.title}
              </Item>
            );
          })}
        </List>
      </Container>
    </Wrapper>
  ), root);
};

export default Breadcrumbs;
