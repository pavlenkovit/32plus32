import styled from 'styled-components';

export default styled.div`
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
