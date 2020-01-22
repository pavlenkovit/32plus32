import React, { useEffect, useState, FC } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';

import Container from '../Container';

import Styled from './Breadcrumbs.styled';

interface IItem {
  title: any;
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
    <Styled.Container>
      <Container>
        <Styled.List itemScope itemType="http://schema.org/BreadcrumbList">
          <Styled.Item itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <Link href="/" passHref>
              <a itemProp="item">
                <span itemProp="name">Главная</span>
              </a>
            </Link>
          </Styled.Item>
          {items.map((item, idx) => {
            if (item.href) {
              return (
                <Styled.Item key={idx} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                  <Link href={item.href} as={item.as} passHref>
                    <a itemProp="item">
                      <span itemProp="name">{item.title}</span>
                    </a>
                  </Link>
                </Styled.Item>
              );
            }
            return (
              <Styled.Item key={idx}>
                {item.title}
              </Styled.Item>
            );
          })}
        </Styled.List>
      </Container>
    </Styled.Container>
  ), root);
};

export default Breadcrumbs;
