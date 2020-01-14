import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  box-shadow: 0 0 6px rgba(0,0,0,0.35);
  padding: 12px 0;
  transition: opacity .2s ease-out, transform .225s ease-out;
  border-radius: 2px;
  z-index: 3;
  &:after {
    content: '';
    position: absolute;
    border: 0.5rem solid transparent;
    pointer-events: none;
    top: -1rem;
    left: 40px;
    border-bottom: 0.5rem solid #fff;
  }
`;

export const Item = styled.li`
  display: block;
`;

export const LinkElement = styled.a`
  display: block;
  white-space: nowrap;
  letter-spacing: 0.1em;
  font-weight: 500;
  text-decoration: none;
  padding: 4px 15px;
  color: #333;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: #f4f4f4;
  }
`;
