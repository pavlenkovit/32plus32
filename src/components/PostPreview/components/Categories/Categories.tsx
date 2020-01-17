import React, { FC } from 'react';
import Styled from './Categories.styled';
import Category from './components/Category';

interface IProps {
  list: any[];
}

const Categories: FC<IProps> = ({ list }) => {
  return (
    <Styled.List>
      {list.map((item) => (
        <Category key={item.id} {...item} />
      ))}
    </Styled.List>
  );
};

export default Categories;
