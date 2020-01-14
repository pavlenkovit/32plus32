import styled from 'styled-components';

export default styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #333;
  padding: 0;
  margin-bottom: 0.15em;
  letter-spacing: 0.05em;
  & svg {
      margin: 0 8px;
    & path {
      transition: .15s ease-out;
      fill: #333;
    }
  }
  &:hover {
    color: #e24242;
    & svg {
      & path {
        fill: #e24242;
      }
    }
  }
  @media (max-width: 480px) {
    & span {
      display: none;
    }
  }
`;
