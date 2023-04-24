import React from 'react';
import styled from 'styled-components';

const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      <ProductIamge />
      <ProductInfoWrap>
        <ProductModel>H01877</ProductModel>
        <ProductEnglishName>Adidas Samba Vegan White Black</ProductEnglishName>
        <ProductKoreanName>아디다스 삼바 비건 화이트 블랙</ProductKoreanName>
        <ProductSize>310</ProductSize>
      </ProductInfoWrap>
    </ProductInfoContainer>
  );
};
const ProductInfoContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 840px;
  /* height: 80px; */
  padding: 32px;
  margin-top: 8px;
`;

const ProductIamge = styled.img`
  width: 80px;
  height: 80px;
  background-color: orange;
  border-radius: 8px;
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
  margin-bottom: 4px;
  margin-left: 14px;
`;

const ProductSize = styled.h6`
  font-weight: bold;
  margin-bottom: 4px;
  margin-left: 14px;
`;

export default ProductInfo;
