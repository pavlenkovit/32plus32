import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #e24242;
  color: #fff;
  z-index: 3;
  transition: height .2s ease-out;
  overflow: hidden;
`;

const Inner = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1 1 auto;
  width: 1%;
  padding: 17px 0;
  font-size: 1em;
  outline: none;
  border: none;
  background: #e24242;
  color: inherit;
  margin-right: 15px;

  &::-webkit-input-placeholder {
    color: #f8f8f8;
  }

  &::-moz-placeholder {
    color: #f8f8f8;
  }

  &:-moz-placeholder {
    color: #f8f8f8;
  }

  &:-ms-input-placeholder {
    color: #f8f8f8;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  box-sizing: border-box;
  display: block;
  font-size: 1em;
  padding: .35em;
  cursor: pointer;
  transition: opacity .15s ease-out;
  & svg {
    width: 1em;
    height: 1em;
    display: block;
  }
  &:hover {
    opacity: 0.6;
  }
`;

export default { Container, Inner, Input, Button };
