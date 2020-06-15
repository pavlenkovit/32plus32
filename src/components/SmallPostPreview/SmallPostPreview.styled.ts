import styled from 'styled-components';

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
  display: flex;
  padding-bottom: 15px;
  &:hover {
    & .imgLink {
      transform: scale(1.05);
      opacity: .9;
    }
  }
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const ImgWrap = styled.div`
  width: 110px;
  margin-right: 15px;
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

const Title = styled.h3`
  margin: 0;
  font-size: 1em;
  font-weight: 500;
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

export default { Container, ImgWrap, ImgContainer, ImgLink, Body, Title, TitleLink };
