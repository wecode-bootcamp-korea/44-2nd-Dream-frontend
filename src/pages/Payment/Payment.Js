import React from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import AddressInfo from './AddressInfo';
import Point from './Point';
import FinalOrderInfo from './FinalOrderInfo';
import CheckAgree from './CheckAgree';
import PaymentMethod from './PaymentMethod';

const Payment = () => {
  return (
    <Content>
      <ProductInfo />
      <AddressInfo />
      <Point />
      <FinalOrderInfo />
      <PaymentMethod />
      <CheckAgree />
    </Content>
  );
};
const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  margin: 100px auto;
  justify-content: center;
  align-items: center;
`;

export default Payment;
