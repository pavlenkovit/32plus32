import styled from 'styled-components';

export const Link = styled.a`
  color: #e24242;
  text-decoration: none;
  display: block;
  padding: .2em .5em;
  border-bottom: solid 2px transparent;
`;

interface IItem {
  isActive: boolean;
}

export const Item = styled.div < IItem > `
  margin-right: 5px;
  ${({ isActive }) => isActive && (
    `& ${Link} {
      color: #333;
      border-color: #333;
    }`
  )}
  &:last-child {
    margin-right: 0;
  }
`;

export default { Link, Item };
