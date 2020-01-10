import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  background: #000;
  color: #9B9B9B;
  padding-top: 30px;
  min-height: 100vh;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const Copy = styled.div`
  margin-bottom: 15px;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & a {
    color: inherit;
    text-decoration: none;
  &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
  & > span {
    margin-right: 10px;
  }
`;
