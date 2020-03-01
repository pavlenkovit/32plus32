import styled from 'styled-components';

const Main = styled.div`
  background: #292929;
  color: #fff;
  font-size: 24px;
  line-height: 1.35;
  padding: 4px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
`;

interface IContainer {
  isRect: boolean;
}

const Container = styled.div < IContainer > `
  width: 764px;
  height: ${({ isRect }) => {
    return isRect ? 764 : 955;
  }}px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0 auto;
  background: #292929;
  &.rect {
    height: 764px;
  }
`;

const Brand = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 2;
  & img {
    width: 150px;
  }
  & span {
    display: block;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.05em;
  }
`;

const Buttons = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  & button {
    display: block;
    margin-bottom: 5px;
  }
`;

const Img = styled.img`
  position: absolute;
  left: -9%;
  top: 0;
  height: 100%;
  width: auto;
  pointer-events: none;
`;

const TopContent = styled.div`
  padding: 20px 20px 10px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 34px;
  & strong {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const List = styled.div`
  margin: 15px 20px 20px;
`;

const All = styled.div`
  margin: 0 20px;
  & strong {
    color: #e24242;
  }
`;

export default { Main, Container, Brand, Buttons, Img, TopContent, Title, Date, List, All };
