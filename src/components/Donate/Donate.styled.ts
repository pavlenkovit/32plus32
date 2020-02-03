import styled from 'styled-components';
import device from '../../constants/device';

const Main = styled.div`
  display: flex;
  margin: 0 -15px;
  @media ${device.laptop} {
    flex-wrap: wrap;
  }
`;

const Col = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  @media ${device.laptop} {
    width: 100% !important;
  }
`;

const Content = styled(Col)`
  flex: 1 1 auto;
  width: 1%;
`;

const Form = styled(Col)`
  width: 380px;
  margin-top: 15px;
`;

const Avatars = styled.div`
  display: flex;
  flex-wrap: wrap;
  & img {
    width: 46px;
    height: 46px;
    border: solid 2px #f4f4f4;
    border-radius: 50%;
    display: block;
    margin-right: 10px;
  }
`;

export default { Main, Avatars, Content, Form };
