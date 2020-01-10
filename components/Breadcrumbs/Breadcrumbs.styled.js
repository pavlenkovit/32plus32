import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f4f4f4;
  padding: 10px 0;
  font-size: 0.9em;
  color: #9B9FA3;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
  padding: 0;
  overflow: hidden;
`;

export const Item = styled.li`
  white-space: nowrap;
  &:after {
    content: '/';
    margin: 0 10px;
  }
  &:last-child {
    flex: 1 1 auto;
    width: 1%;
    overflow: hidden;
    text-overflow: ellipsis;
    &:after {
      content: '';
    }
  }
  & a {
    white-space: nowrap;
  }
`;
