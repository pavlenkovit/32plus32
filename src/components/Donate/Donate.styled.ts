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
  margin-bottom: 7px;
`;

const Hide = styled.span`
  color: #9B9FA3;
`;

const Price = styled.span`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  padding: 3px 5px;
  border-radius: 1px;
  margin-left: 10px;
  background: #9B9FA3;
`;

export default { Main, Col, Avatars, CommentsList, Comment, Price, Hide };
