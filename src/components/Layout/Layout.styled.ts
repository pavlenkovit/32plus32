import styled from 'styled-components';
import device from '../../constants/device';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh !important;
`;

export const Main = styled.main`
  padding: 50px 0;
  flex: 1 1 auto;
  height: 1%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  margin-top: 66px;
  @media ${device.laptop} {
    margin-top: 48px;
  }
`;

export const Content = styled.div`
  flex: 1 1 auto;
  position:relative;
  width: 1%;
`;

export const BreadCrumbs = styled.div`
  margin-top: 66px;
  @media ${device.laptop} {
    margin-top: 48px;
  }
`;
