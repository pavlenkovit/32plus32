import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: .7em;
  letter-spacing: .035em;
  line-height: 1;
`;

const ImgLink = styled.div`
  display: block;
  height: 30px;
  width: 30px;
  background: #ccc;
  border-radius: 50%;
  margin-right: 12px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
`;

const Content = styled.div`
  padding-top: 2px;
`;

const Name = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
`;

const Date = styled.time`
  color: #9B9FA3;
  display: block;
  margin-top: 5px;
`;

export default { Wrapper, ImgLink, Img, Content, Name, Date };
