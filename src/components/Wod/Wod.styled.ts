import styled from 'styled-components';

const Main = styled.div`
  background: #292929;
  color: #fff;
  font-size: 18px;
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
  height: 955px;
  background: #292929;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  &.rect {
    height: 764px;
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
  padding: 15px 15px 5px;
  display: flex;
  align-items: center;
`;

const AuthorImg = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-right: 15px;
  border: solid 2px rgba(255,255,255,0.75);
  margin-top: -5px;
`;

const Content = styled.div`
  flex: 1 1 auto;
  height: 1%;
  padding: 0 15px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 27px;
  & strong {
    font-weight: 600;
    color: #e24242
  }
`;

const Date = styled.div`
  font-weight: 600;
  font-size: 21px;
  color: rgba(255, 255, 255, 0.65);
`;

const More = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #e24242;
  z-index: 1;
  box-shadow: 0 0 40px 40px #292929;
  padding: 10px 15px 11px;
  font-weight: 600;
`;

const Brand = styled.div`
  font-family: 'Handel Gothic';
  font-size: 1.25em;
  position: absolute;
  bottom: 6px;
  right: 15px;
  z-index: 2;
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

export default { Main, Container, Img, TopContent, AuthorImg, Content, Title, Date, More, Brand, Buttons };
