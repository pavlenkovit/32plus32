import React, { useEffect, useState, FC } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';

import Container from '../Container';

import { Wrapper, List, Item } from './Breadcrumbs.styled';

interface IItem {
  title: string;
  href?: string;
  as?: string;
}

interface IProps {
  items: IItem[];
}

const Breadcrumbs: FC<IProps> = ({ items }) => {
  const [root, updRoot] = useState<any>(null);

  useEffect(() => {
    const element = document.querySelector('#breadcrumbs');
    if (element) {
      updRoot(element);
    }
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
            if (item.href) {
              return (
                <Item key={idx} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                  <Link href={item.href} as={item.as}>
                    <a itemProp="item">
                      <span itemProp="name">{item.title}</span>
                    </a>
                  </Link>
                </Item>
              );
            }
            return (
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
