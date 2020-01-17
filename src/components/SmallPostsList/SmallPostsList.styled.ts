import styled from 'styled-components';

const Title = styled.h2`
  margin: 0 0 15px;
  & a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #e24242;
    }
  }
`;

const Block = styled.div`
  background: #f4f4f4;
  border-radius: 2px;
  padding: 15px;
  margin: 0 -15px 30px;
`;

export default { Title, Block };
