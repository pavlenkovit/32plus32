import styled from 'styled-components';

interface IPropsWrapper {
  isSmall: boolean;
}

export default styled.div < IPropsWrapper > `
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
`;
