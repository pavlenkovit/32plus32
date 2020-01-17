import styled from 'styled-components';

const Burger = styled.div`
  padding: 10px;
  margin: -15px -10px -15px 0;
  width: 24px;
  height: 18px;
  box-sizing: content-box;
  cursor: pointer;
  z-index: 1;
`;

const Inner = styled.div`
  position: relative;
  width: 24px;
  height: 18px;
`;

interface ILine {
  top: number;
}

const Line = styled.div < ILine > `
  width: 100%;
  height: 2px;
  position: absolute;
  background: #fff;
  top: ${({ top }) => top}px;
`;

export default { Burger, Inner, Line };
