import styled from 'styled-components';

const Button = styled.a`
  background: #e24242;
  color: #fff;
  text-decoration: none;
  padding: 8px 14px 9px;
  border-radius: 1px;
  letter-spacing: 0.075em;
  font-weight: 500;
  font-size: 15px;
  transition: background .15s ease-out;
  &:hover {
    background: #ac3737;
    color: #fff;
  }
`;

export default { Button };
