import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: 0;
  top: -70px;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 100;
  transform: translate(0, 70px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 40px 15px 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  font-size: 1em;
  border: none;
  outline: none;
  background: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  & svg {
    display: block;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 15px;
  font-size: 1.25em;
  display: block;
  width: 100%;
`;

const Item = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
  display: block;
  text-align: center;
  color: #333;
`;

export default { Container, Button, List, Item, Link };
