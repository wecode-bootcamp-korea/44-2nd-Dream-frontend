import React from 'react';
import styled from 'styled-components';

function TradeDetailsList() {
  return (
    <ProductContainer>
      <ProductImg />
      <ProductInfo>
        <ModelNumber>12</ModelNumber>
        <ProductName>12</ProductName>
        <ProductSize>ONE SIZE</ProductSize>
      </ProductInfo>
      <ChangeBtn>입찰 변경하기</ChangeBtn>
      <BiddingPrice>12,000원</BiddingPrice>
      <DeadLineValue>23/05/05</DeadLineValue>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
  margin-bottom: 20px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;

const ProductImg = styled.div`
  width: 80px;
  height: 80px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
`;

const ProductInfo = styled.div`
  flex-grow: 1;
`;

const ModelNumber = styled.div`
  line-height: 17px;
  padding-bottom: 2px;
  font-size: 13px;
  font-weight: 700;
  color: #000000;
`;

const ProductName = styled.div`
  margin-top: 2px;
  font-size: 13px;
  line-height: 18px;
  color: #222222;
`;

const ProductSize = styled.div`
  padding-top: 26px;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
`;

const ChangeBtn = styled.div`
  border-radius: 10px;
  border: 1px solid #ebebeb;
  padding: 10px;
  font-size: 15px;
`;

const BiddingPrice = styled.div``;

const DeadLineValue = styled.div``;

export default TradeDetailsList;
