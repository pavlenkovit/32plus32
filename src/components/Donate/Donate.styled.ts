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
  &:first-child {
    flex: 1 1 auto;
    width: 1%;
  }
  &:last-child {
    width: 380px;
  }
  @media ${device.laptop} {
   &:first-child {
     width: 100%;
   }
   &:last-child {
     width: 100%;
   }
  }
`;

const Avatars = styled.div`
  display: flex;
  flex-wrap: wrap;
  & img {
    width: 50px;
    height: 50px;
    border: solid 2px #f4f4f4;
    border-radius: 50%;
    display: block;
    margin-right: 10px;
  }
`;

const CommentsList = styled.div`

`;

const Comment = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #f4f4f4;
`;

const Date = styled.div`
  margin-right: 15px;
  font-size: 0.75em;
  text-align: center;
  & div:nth-child(2) {
    color: #9B9FA3;
  }
`;

const Text = styled.div`
  flex: 1 1 auto;
  width: 1%;
`;

const Hide = styled.span`
  color: #9B9FA3;
`;

const Wallet = styled.div`
  background: #f4f4f4;
  background-image: url('/img/wallet.png');
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Price = styled.div`
  color: #04a504;
`;

export default { Main, Col, Avatars, CommentsList, Comment, Price, Text, Hide, Date, Wallet };
