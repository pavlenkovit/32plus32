import styled from 'styled-components';
import device from '../../../../constants/device';

export const Wrapper = styled.header`
  background: #000;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  height: 66px;
  & > div:first-child {
    height: 100%;
  }
  @media ${device.tablet} {
    height: 48px;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
`;
