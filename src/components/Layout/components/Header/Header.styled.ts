import styled from 'styled-components';
import device from '../../../../constants/device';

const Container = styled.header`
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
  @media ${device.laptop} {
    height: 48px;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`;

const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrap = styled.div`
  margin-left: 15px;
`;

export default { Container, Inner, Left, MobileWrapper, ButtonWrap };
