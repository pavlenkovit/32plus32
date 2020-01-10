import styled from 'styled-components';
import device from '../../constants/device';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  padding: 30px 0;
  flex: 1 1 auto;
  height: 1%;
  position: relative;
  min-height: 100vh;
`;

export const BreadCrumbs = styled.div`
  margin-top: 66px;
  @media ${device.tablet} {
    margin-top: 48px;
  }
`;

export const Inner = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1 1 auto;
  width: 1%;
`;

export const SidebarWrapper = styled.div`
  width: 300px;
  margin-left: 30px;
`;
