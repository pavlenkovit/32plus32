import styled from 'styled-components';

const Link = styled.a`
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
    color: ${({ theme }) => theme.colors.primary};
    & svg {
      & path {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  @media (max-width: 480px) {
    & span {
      display: none;
    }
  }
`;

export default { Link };
