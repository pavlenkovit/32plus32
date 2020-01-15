import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
  bottom: 15px;
  width: 50px;
`;

interface IInner {
  isFixedTop: boolean;
  isFixedBottom: boolean;
  marginTop: number;
}

const Inner = styled.div < IInner > `
  display: flex;
  align-items: center;
  width: 50px;
  height: 100vh;
  margin-top: ${({ marginTop }) => marginTop}px;
  transform: translateZ(0);
  ${({ isFixedTop, isFixedBottom }) => (isFixedTop || isFixedBottom) && (
    'position: fixed;'
  )}
    ${({ isFixedTop }) => isFixedTop && (
    'top: 0'
  )}
    ${({ isFixedBottom }) => isFixedBottom && (
    'bottom: 0;'
  )}
`;

export default { Container, Inner };
