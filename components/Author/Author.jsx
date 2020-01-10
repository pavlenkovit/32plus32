import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

import { Wrapper, ImgLink, Img, Name, DateContainer, Content } from './Author.styled';

const Author = (props) => {
  const { name, slug, date } = props;
  const href = '/user/[slug]';
  const as = `/user/${slug}`;

  return (
    <Wrapper itemProp="author" itemScope itemType="http://schema.org/Person">
      <Link href={href} as={as}>
        <ImgLink>
          <Img src={`/static/avatars/${slug}.jpg`} alt={name} itemProp="image" />
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
