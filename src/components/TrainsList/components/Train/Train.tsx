import React, { FC } from 'react';
import Link from 'next/link';

import ArrowIcon from '../../../../icons/ArrowIcon';
import getDateByTitle from '../../../../utils/getDateByTitle';
import Author from './components/Author';
import { IPost } from '../../../../models/wp';
import Styled from './Train.styled';

const Train: FC<IPost> = ({ title, slug, date, modified, _embedded: { author } }) => {
  const { day, month, year, weekDay } = getDateByTitle(title);

  return (
    <Styled.Container itemScope itemType="http://schema.org/Article">
      <meta itemProp="datePublished" content={date} />
      <meta itemProp="dateModified" content={modified} />
      <meta itemProp="description" content={`Тренировка по гиревому спорту по классическому двоеборью на ${day}/${month}/${year}`} />
      <Author {...author[0]} />
      <Styled.Content>
        <Styled.TitleLine>
          <Styled.Title>
            <Link href="train/[slug]" as={`train/${slug}`}>
              <a itemProp="url headline name">
                {`${day}/${month}/${year} (${weekDay})`}
              </a>
            </Link>
          </Styled.Title>
          <Link href="train/[slug]" as={`train/${slug}`}>
            <Styled.Action>
              <span>Тренироваться</span>
              <ArrowIcon size={10} color="#e24242" />
            </Styled.Action>
          </Link>
        </Styled.TitleLine>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Train;
