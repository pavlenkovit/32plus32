import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Link = styled.a`
  display: block;
  padding: 7px;
  margin-right: 2px;
  margin-bottom: 2px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    & path {
      fill: #fff;
    }
  }
  & svg {
    display: block;
    & path {
      transition: fill .15s ease-out;
    }
  }
`;

export default { Container, Link };
