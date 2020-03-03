import styled from 'styled-components';

interface IPropsWrapper {
  isSmall: boolean;
}

export default styled.div < IPropsWrapper > `
  max-width: ${({ isSmall }) => {
    return isSmall ? 920 : 1150;
  }}px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
`;
