import styled from 'styled-components';

interface IWrapper {
  isRelax: boolean;
}

const Wrapper = styled.div < IWrapper > `
  ${({ isRelax }) => isRelax && `
    text-align: center;
    margin-top: 50px;
    opacity: 0.75;
  `}
  & :global(.table-responsive) {
    margin: 0 -15px;
  }

  & :global(.table) {
    border-collapse: collapse;
    margin: -1px -1px 0;
    min-width: calc(100% + 2px);
    & th, td {
      border: 1px solid #454545;
      padding: 0.35em 0.5em;
      vertical-align: middle;
    }
    & th {
      font-weight: 700;
      background: rgba(255,255,255,0.45);
      color: #333;
      border-top: none;
      font-size: 0.9em;
      border-bottom-color: transparent;
    }
  }

  h2 {
    margin: 15px 0 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin: 10px 0;
  }
`;

export default { Wrapper };
