import styled from 'styled-components';
import device from '../../../../../../constants/device';

const Container = styled.aside`
  flex: 0 0 33.33%;
  max-width: 33.33%;
  padding: 0 15px;
  box-sizing: border-box;
  margin-bottom: 30px;
  @media ${device.tablet} {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 540px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 0.85em;
  margin: 0 0 0.75em;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.075em;
`;

export default { Container, Title };
