import styled from 'styled-components';
import device from '../../constants/device';

export const Main = styled.div`
  display: flex;
  margin: 0 -15px;
  @media ${device.laptop} {
    flex-wrap: wrap;
  }
`;

export const Col = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  @media ${device.laptop} {
    width: 100% !important;
  }
`;

export const Form = styled(Col)`
  width: 380px;
  margin-top: 15px;
`;

export const Avatars = styled.div`
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

export const ImgMoney = styled.img`
  margin-bottom: -0.25em;
  width: 60px;
  margin-right: 0.15em;
`;

export const Content = styled(Col)`
  flex: 1 1 auto;
  width: 1%;
`;

export const ButtonWrap = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  background: #000;
  color: #fff;
  padding: 8px 15px 9px;
  border: none;
  outline: none;
  border-radius: 1px;
  font-size: 0.85em;
  font-weight: 600;
  margin-top: 15px;
  cursor: pointer;
`;
