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
  src: string;
}

const Container = styled.div < IContainer > `
  width: 764px;
  height: ${({ isRect }) => {
    return isRect ? 764 : 955;
  }}px;
  background: rgba(41,41,41,0.85);
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  &.rect {
    height: 764px;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url('${({ src }) => src}') no-repeat center;
    background-size: cover;
    z-index: -1;
  }
`;

const TopContent = styled.div`
  text-align: center;
  letter-spacing: 0.05em;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 56px;
  font-weight: 600;
  line-height: 1.2;
`;

const Tag = styled.div`
  font-weight: 600;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5px;
  //color: rgba(255, 255, 255, 0.65);
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

export default { Main, Container, TopContent, Title, Tag, Brand, Buttons };
