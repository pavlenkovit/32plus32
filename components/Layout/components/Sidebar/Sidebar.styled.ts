import styled from 'styled-components';

interface IProps {
  marginTop: number;
  isFixedTop: boolean;
  isFixedBottom: boolean;
}

export default styled.div < IProps > `
  width: 300px;
  padding-bottom: 15px;
  margin-top: ${({ marginTop }) => marginTop}px;
  transform: translateZ(0);
  ${({ isFixedTop, isFixedBottom }) => (isFixedTop || isFixedBottom) && (
    'position: fixed;'
  )}
  ${({ isFixedTop }) => isFixedTop && (
    'top: 15px;'
  )}
  ${({ isFixedBottom }) => isFixedBottom && (
    'bottom: 0;'
  )}
`;
