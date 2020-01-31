import styled from 'styled-components';
import device from '../../constants/device';

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Col = styled.div`
  max-width: 50%;
  flex: 0 0 50%;
  box-sizing: border-box;
  padding: 0 15px;
  @media ${device.laptop} {
    max-width: 100%;
    flex: 0 0 100%;
  }
`;

const Avatars = styled.div`
  display: flex;
  flex-wrap: wrap;
  & img {
    width: 80px;
    height: 80px;
    border: solid 2px #f4f4f4;
    border-radius: 50%;
    display: block;
    margin-bottom: 15px;
    margin-right: 15px;
  }
`;


export default { Main, Col, Avatars };
