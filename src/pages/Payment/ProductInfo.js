import React from 'react';
import styled from 'styled-components';

const ProductInfo = ({ bidData }) => {
  const { productName, modelNumber, imageUrl } = bidData;

  return (
    <ProductInfoContainer>
      <ProductIamge imageUrl={imageUrl} />
      <ProductInfoWrap>
        <ProductModel>{modelNumber}</ProductModel>
        <ProductEnglishName />
        <ProductKoreanName>{productName} </ProductKoreanName>
        <ProductSize>ONE SIZE</ProductSize>
      </ProductInfoWrap>
    </ProductInfoContainer>
  );
};
const ProductInfoContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 840px;
  padding: 32px;
  margin-top: 8px;
`;

const ProductIamge = styled.img`
  width: 80px;
  height: 80px;
  background-color: orange;
  border-radius: 8px;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProductInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductModel = styled.h3`
  margin-left: 14px;
  margin-bottom: 4px;
  font-size: 20px;
  font-weight: bold;
`;

const ProductEnglishName = styled.h4`
  font-size: 16px;
  margin-bottom: 4px;
  margin-left: 14px;
`;

const ProductKoreanName = styled.h5`
  color: gray;
  margin-top: 6px;
  margin-left: 14px;
`;

const ProductSize = styled.h6`
  font-weight: bold;
  margin-top: 14px;
  margin-left: 14px;
`;

export default ProductInfo;
