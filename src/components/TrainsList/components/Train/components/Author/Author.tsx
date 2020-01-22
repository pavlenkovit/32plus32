import React, { FC } from 'react';
import Link from 'next/link';

import Styled from './Author.styled';
import useImgParams from '../../../../../../hooks/useImgParams';

interface IProps {
  name: string;
  slug: string;
}

const Author: FC<IProps> = ({ name, slug }) => {
  const imgSrc = `/avatars/${slug}.jpg`;
  const imgParams = useImgParams(imgSrc, '/img/author.png');
  const href = '/user/[slug]';
  const as = `/user/${slug}`;

  return (
    <Link href={href} as={as} passHref>
      <Styled.ImgLink itemProp="author" itemScope itemType="http://schema.org/Person">
        <Styled.Img {...imgParams} alt={name} itemProp="image" />
      </Styled.ImgLink>
    </Link>
  );
};

export default Author;
