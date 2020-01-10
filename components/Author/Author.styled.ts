import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: .7em;
  letter-spacing: .035em;
  line-height: 1;
`;

export const ImgLink = styled.div`
  display: block;
  height: 30px;
  width: 30px;
  background: #ccc;
  border-radius: 50%;
  margin-right: 12px;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
`;

export const Content = styled.div`
  padding-top: 2px;
`;

export const Name = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
`;

export const DateContainer = styled.time`
  color: #9B9FA3;
  display: block;
  margin-top: 5px;
`;
