import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #f4f4f4;
  &:first-child {
    border-top: solid 1px #f4f4f4;
  }
`;

const Date = styled.div`
  margin-right: 15px;
  font-size: 0.75em;
  text-align: center;
  & div:nth-child(2) {
    color: #9B9FA3;
  }
`;

const Text = styled.div`
  flex: 1 1 auto;
  width: 1%;
`;

const Hide = styled.span`
  color: #9B9FA3;
`;

const Wallet = styled.div`
  background: #f4f4f4;
  background-image: url('/img/wallet.png');
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Price = styled.div`
  color: #04a504;
`;

export default { Container, Price, Text, Hide, Date, Wallet };
