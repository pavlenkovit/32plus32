import styled from 'styled-components';
import device from '../../../../../../constants/device';

const Logo = styled.a`
  display: block;
  margin-right: 25px;
  transition: opacity .15s ease-out;
  
  &:hover {
    opacity: 0.65;
  }
`;

const Img = styled.img`
  display: block;
  width: 160px;
  @media ${device.tablet} {
    width: 140px;
  }
`;

export default { Logo, Img };
