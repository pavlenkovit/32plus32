import React, { FC } from 'react';
import Link from 'next/link';

import Styled from './Author.styled';

interface IProps {
  name: string;
  slug: string;
}

const Author: FC<IProps> = ({ name, slug }) => {
  const href = '/user/[slug]';
  const as = `/user/${slug}`;

  return (
    <Link href={href} as={as}>
      <Styled.ImgLink itemProp="author" itemScope itemType="http://schema.org/Person">
        <Styled.Img src={`/avatars/${slug}.jpg`} alt={name} itemProp="image" />
      </Styled.ImgLink>
    </Link>
  );
};

export default Author;
