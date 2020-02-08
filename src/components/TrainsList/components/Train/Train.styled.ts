import styled from 'styled-components';
import device from '../../../../constants/device';

const Title = styled.h2`
  margin: 0 8px 0 0;
  font-size: 1.2em;
  line-height: 1.33;
  flex: 1 1 auto;
  width: 1%;
  & a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media ${device.tablet} {
    font-size: 1.2em;
    width: 100%;
    margin-bottom: 0.25em;
  }
`;

const Container = styled.div`
  padding-bottom: 15px;
  margin-bottom: 15px;
  position: relative;
  transition: background .2s ease-out;
  border-radius: 2px;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid #dee2e6;
  }
`;

const Content = styled.div`
  flex: 1 1 auto;
  width: 1%;
`;

const TitleLine = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Action = styled.a`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  text-decoration: none;
  & span {
    margin-right: 5px;
  }
  
  & svg {
    display: block;
    margin-top: 1px;
    transform: rotate(-90deg);
    transition: transform .15s ease-out;
  }

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    & svg {
      transform: rotate(-90deg) translateY(7px);
    }
  }
`;

export default { Container, Content, TitleLine, Title, Action };
