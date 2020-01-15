import styled from 'styled-components';

const Item = styled.div`
  margin: 0 3px 1px 0;
  position: relative;
`;

const Info = styled.div`
  position: relative;
  padding: 6px 8px;
  background: #ebebeb;
  color: #32363b;
  margin-top: 9px;
  font-weight: 600;
  transition: background .15s ease-out;

  &:after {
    content: "";
    position: absolute;
    border-style: solid;
    display: block;
    width: 0;
    height: 0;
    top: -4px;
    left: calc(50% - 4px);
    border-width: 0 4px 4px 4px;
    border-color: transparent transparent #ebebeb transparent;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.65em;
  display: flex;
  padding: 7px;
  flex-direction: column;
  align-items: center;
  & svg {
    display: block;
    transition: transform .2s ease-out;
  }

  &:hover {
    & svg {
      transform: translateY(-3px);
    }

    & ${Info} {
      background: #e1e2e2;
    }
  }
`;

interface IList {
  isInline: boolean;
}

const List = styled.div < IList > `
  display: flex;
  align-items: center;
  ${({ isInline }) => !isInline && `
    flex-direction: column;
  `}
  ${({ isInline }) => isInline && `
    justify-content: center;
    & ${Button} {
      flex-direction: row;
    }

    & ${Info} {
      margin-top: 0;
      margin-left: 9px;

      &:after {
        left: -4px;
        top: calc(50% - 4px);
        border-width: 4px 4px 4px 0;
        border-color: transparent #ebebeb transparent transparent;
      }
    }
  `}
`;

export default { Item, Button, Info, List };
