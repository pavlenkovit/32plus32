import styled from 'styled-components';

const ImgLink = styled.a`
  display: block;
  height: 36px;
  width: 36px;
  background: #ccc;
  border-radius: 50%;
  border: solid 2px #d9d9d9;
  margin-right: 15px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
`;

export default { ImgLink, Img };
