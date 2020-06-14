import styled from 'styled-components';

const Title = styled.h2`
  margin: 0 0 15px;
  & a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Block = styled.div`
  margin-bottom: 30px;
`;

export default { Title, Block };
