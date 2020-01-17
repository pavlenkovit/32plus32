import React, { FC } from 'react';
import Link from 'next/link';

import Styled from './Category.styled';

interface IProps {
  name: string;
  slug: string;
}

const Category: FC<IProps> = ({ name, slug }) => {
  const href = '/category/[slug]';
  const as = `/category/${slug}`;

  return (
    <Link href={href} as={as}>
      <Styled.Link>{name}</Styled.Link>
    </Link>
  );
};

export default Category;
