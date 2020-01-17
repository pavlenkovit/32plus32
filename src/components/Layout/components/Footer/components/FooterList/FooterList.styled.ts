import styled from 'styled-components';

const List = styled.div`
  display: block;
  & > a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;

export default { List };
