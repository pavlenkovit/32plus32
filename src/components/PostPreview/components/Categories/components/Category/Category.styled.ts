import styled from 'styled-components';

const Link = styled.a`
  color: #797979;
  border: 1px solid #E1E1E1;
  display: inline-block;
  padding: 6px 9px;
  border-radius: 40px;
  margin-right: 7px;
  line-height: 1;
  margin-bottom: 10px;
  letter-spacing: .4px;
  text-decoration: none;
  transition: border .1s ease-out, color .1s ease-out;
  &:hover {
    border: 1px solid #acacac;
    color: #333;
  }
`;

export default { Link };
