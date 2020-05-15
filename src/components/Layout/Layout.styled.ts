import styled from 'styled-components';
import device from '../../constants/device';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  padding: 50px 0;
  flex: 1 1 auto;
  height: 1%;
  position: relative;
  min-height: calc(100vh - 110px);
  box-sizing: border-box;
`;

export const BreadCrumbs = styled.div`
  margin-top: 66px;
  @media ${device.laptop} {
    margin-top: 48px;
  }
`;
