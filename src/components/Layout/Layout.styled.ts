import styled from 'styled-components';
import device from '../../constants/device';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  padding: 30px 0;
  flex: 1 1 auto;
  height: 1%;
  position: relative;
  min-height: 100vh;
`;

const BreadCrumbs = styled.div`
  margin-top: 66px;
  @media ${device.tablet} {
    margin-top: 48px;
  }
`;

const Inner = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1 1 auto;
  width: 1%;
`;

const Sidebar = styled.div`
  width: 300px;
  margin-left: 30px;
  @media ${device.tablet} {
    display: none;
  }
`;

export default { Container, Main, BreadCrumbs, Inner, Content, Sidebar };
