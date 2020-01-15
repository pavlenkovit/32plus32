import styled from 'styled-components';

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 10px 0 0;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

const Item = styled.li`
  position: relative;
  & > ul {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
  }
  &:hover {
    & > ul {
      opacity: 1;
      pointer-events: inherit;
      transform: translateY(0px);
    }
  }
`;

const Link = styled.a`
  padding: 0.75em 1em;
  letter-spacing: 0.1em;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  & svg {
    display: block;
    margin-top: 0.1em;
    & path {
      transition: fill .15s ease-out;
    }
  }

  &:hover {
    text-decoration: none;
    color: #e24242;

    & path {
      fill: #e24242
    }
  }

  & span {
    margin-right: 0.35em;
  }
`;

export default { Menu, Item, Link };
