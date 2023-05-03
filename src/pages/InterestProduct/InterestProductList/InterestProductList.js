import React from 'react';
import styled from 'styled-components';

function InterestProductList({ data, handleLike }) {
  return (
    <ProductContainer>
      <ProductImg image={data.productImage} />
      <ProductInfo>
        <ModelNumber>{data.productModelNumber}</ModelNumber>
        <ProductName>{data.productName}</ProductName>
        <ProductSize>ONE SIZE</ProductSize>
      </ProductInfo>
      <ButtonContainer>
        <div>
          <PurchaseBtn>
            <PurchaseText>구매</PurchaseText>
            <PriceContainer>
              <PurchasePrice>
                {Number(data.immediateSalePrice).toLocaleString() + '원'}
              </PurchasePrice>
              <NowPrice>즉시 구매가</NowPrice>
            </PriceContainer>
          </PurchaseBtn>
          <RemoveBtn
            onClick={() => {
              handleLike(data.productId);
            }}
          >
            삭제
          </RemoveBtn>
        </div>
      </ButtonContainer>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  display: flex;
  gap: 15px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
`;

const ProductImg = styled.div`
  width: 80px;
  height: 80px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
`;

const ProductInfo = styled.div``;

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const PurchaseBtn = styled.div`
  display: flex;
  width: 164px;
  height: 60px;
  border-radius: 15px;
  background-color: #ef6253;
  &:hover {
    cursor: pointer;
  }
`;
const PurchaseText = styled.div`
  flex: 1;
  padding-top: 23px;
  border-right: 1px solid #d95b4e;
  text-align: center;
  font-size: 16px;
  color: #ffffff;
`;

const PriceContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding-top: 16px;
  padding-left: 21px;
`;

const PurchasePrice = styled.div`
  font-size: 15px;
  color: #ffffff;
`;

const NowPrice = styled.div`
  margin-top: 1px;
  font-size: 10px;
  font-weight: 600;
  color: #fcccc7;
  text-align: left;
`;

const RemoveBtn = styled.div`
  text-align: right;
  margin-top: 6px;
  padding: 0 3px;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.8);
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #e20700;
  }
`;

export default InterestProductList;
