import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: .35em;
  background: none;
  border: none;
  outline: none;
  font-size: 1em;
  cursor: pointer;
  transition: opacity .15s ease-out;
  
  & svg {
    pointer-events: none;
    display: block;
    width: 1em;
    height: 1em;
  }

  &:hover {
    opacity: 0.6;
  }
`;

export default { Button };
