import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
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
  justify-content: center;
  width: 50px;
  height: calc(100vh - 116px);
  margin-top: ${({ marginTop }) => marginTop}px;
  transform: translateZ(0);
  ${({ isFixedTop, isFixedBottom }) => (isFixedTop || isFixedBottom) && (
    'position: fixed;'
  )}
    ${({ isFixedTop }) => isFixedTop && (
    'top: 116px;'
  )}
    ${({ isFixedBottom }) => isFixedBottom && (
    'bottom: 0;'
  )}
`;

export default { Container, Inner };
