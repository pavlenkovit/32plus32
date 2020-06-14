import React, { FC } from 'react';
import Link from 'next/link';
import Styled from './Breadcrumbs.styled';

interface IItem {
  title: any;
  href?: string;
  as?: string;
}

interface IProps {
  items?: IItem[];
}

const Breadcrumbs: FC<IProps> = ({ items = [] }) => {
  return (
    <Styled.Container>
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
    </Styled.Container>
  );
};

export default Breadcrumbs;
