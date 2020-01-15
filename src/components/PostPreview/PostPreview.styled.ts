import styled from 'styled-components';
import device from '../../constants/device';

const ImgWrap = styled.div`
  width: 400px;
  max-width: 50%;
  margin-right: 30px;
  @media ${device.tablet} {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    margin-right: 0;
  }
`;

const ImgLink = styled.a`
  display: block;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform .3s ease-out, opacity .2s ease-out;
`;

const Container = styled.article`
  margin-bottom: 40px;
  display: flex;
  &:hover {
    & ${ImgLink} {
      transform: scale(1.05);
      opacity: .9;
    }
  }
  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 0;
  box-sizing: border-box;
  padding: 33.3% 0;
  position: relative;
  overflow: hidden;
`;

const Body = styled.div`
  flex: 1 1 auto;
  width: 1%;
`;

const Info = styled.div`
  margin-bottom: 15px;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 7px;
  font-size: 1.35em;
`;

const TitleLink = styled.a`
  color: inherit;
  display: block;
  text-decoration: none;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;

const Excerpt = styled.div`
  margin-bottom: 15px;
  & p {
    margin: 0;
  }
`;

export default { ImgWrap, Container, ImgLink, ImgContainer, Body, Info, Title, TitleLink, Excerpt };
