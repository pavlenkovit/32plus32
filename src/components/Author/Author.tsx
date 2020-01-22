import React, { FC } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

import Styled from './Author.styled';
import useImgParams from '../../hooks/useImgParams';

interface IProps {
  name: string;
  slug: string;
  date?: string;
}

const Author: FC<IProps> = ({ name, slug, date }) => {
  const imgSrc = `/avatars/${slug}.jpg`;
  const imgParams = useImgParams(imgSrc, '/img/author.png');
  const href = '/user/[slug]';
  const as = `/user/${slug}`;

  return (
    <Styled.Wrapper itemProp="author" itemScope itemType="http://schema.org/Person">
      <Link href={href} as={as} passHref>
        <Styled.ImgLink>
          <Styled.Img {...imgParams} alt={name} itemProp="image" />
        </Styled.ImgLink>
      </Link>
      <Styled.Content>
        <Link href={href} as={as} passHref>
          <Styled.Name itemProp="url">
            <span itemProp="name">{name}</span>
          </Styled.Name>
        </Link>
        {date && (
          <Styled.Date dateTime={date}>
            {format(new Date(date), 'D MMMM YYYY', { locale: ru })}
          </Styled.Date>
        )}
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Author;
