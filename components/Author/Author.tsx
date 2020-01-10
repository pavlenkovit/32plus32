import React, { FC } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

import { Wrapper, ImgLink, Img, Name, DateContainer, Content } from './Author.styled';

interface IProps {
  name: string;
  slug: string;
  date?: string;
}

const Author: FC<IProps> = ({ name, slug, date }) => {
  const href = '/user/[slug]';
  const as = `/user/${slug}`;

  return (
    <Wrapper itemProp="author" itemScope itemType="http://schema.org/Person">
      <Link href={href} as={as}>
        <ImgLink>
          <Img src={`/avatars/${slug}.jpg`} alt={name} itemProp="image" />
        </ImgLink>
      </Link>
      <Content>
        <Link href={href} as={as}>
          <Name itemProp="url"><span itemProp="name">{name}</span></Name>
        </Link>
        {date && (
          <DateContainer dateTime={date}>
            {format(new Date(date), 'D MMMM YYYY', { locale: ru })}
          </DateContainer>
        )}
      </Content>
    </Wrapper>
  );
};

export default Author;
