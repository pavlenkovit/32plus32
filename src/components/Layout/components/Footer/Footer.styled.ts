import styled from 'styled-components';

const Container = styled.footer`
  background: #000;
  color: #9B9B9B;
  padding-top: 30px;
  z-index: 1;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Copy = styled.div`
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

export default { Container, Row, Copy };
