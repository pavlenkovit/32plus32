import styled from 'styled-components';
import device from '../../../../../../constants/device';

const Logo = styled.a`
  display: block;
  margin-right: 25px;
  font-family: 'Handel Gothic', sans-serif;
  line-height: 1;
  font-size: 30px;
  color: inherit;
  margin-bottom: -0.15em;
  transition: opacity .15s ease-out;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    opacity: 0.65;
    color: inherit;
  }
  @media ${device.tablet} {
    font-size: 26px;
    margin-bottom: -0.2em;
  }
`;

export default { Logo };
