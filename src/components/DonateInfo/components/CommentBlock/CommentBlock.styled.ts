import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  border-bottom: solid 1.5px #3f3f3e;
  &:first-child {
    border-top: solid 1.5px #3f3f3e;
  }
`;

const Date = styled.div`
  margin-right: 15px;
  font-size: 0.65em;
  text-align: center;
  & div {
    &:nth-child(1) {
    }
    &:nth-child(2) {
      color: #9B9FA3;
      font-size: 1em;
    }
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
  background: #3c3c3c;
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
  color: #e24242;
  font-weight: 600;
`;

export default { Container, Price, Text, Hide, Date, Wallet };
