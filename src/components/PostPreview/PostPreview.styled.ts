import styled from 'styled-components';
import device from '../../constants/device';

const ImgWrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media ${device.tablet} {
    
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
  max-width: 50%;
  flex: 0 0 50%;
  padding: 0 15px;
  box-sizing: border-box;
  &:hover {
    & ${ImgLink} {
      transform: scale(1.05);
      opacity: .9;
    }
  }
  @media ${device.tablet} {
    max-width: 100%;
    flex: 0 0 100%;
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

export default { ImgWrap, Container, ImgLink, ImgContainer, Info, Title, TitleLink, Excerpt };
