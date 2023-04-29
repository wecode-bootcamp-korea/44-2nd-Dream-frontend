import React from 'react';
import styled from 'styled-components';

function ProductData({ detailData }) {
  const { productLevel } = detailData;
  const rating = '★'.repeat(productLevel) + '☆'.repeat(5 - productLevel);

  return (
    <div>
      <Title>상품 정보</Title>
      <DataArea>
        <ModelNumber>
          <DateKey>모델번호</DateKey>
          <DateValue>{detailData.modelNumber}</DateValue>
        </ModelNumber>
        <ReleaseDate>
          <DateKey>연령</DateKey>
          <DateValue>{detailData.productAge}세 이상</DateValue>
        </ReleaseDate>
        <Color>
          <DateKey>난이도</DateKey>
          <DateValue>{rating}</DateValue>
        </Color>
        <SellingPrice>
          <DateKey>발매가</DateKey>
          <DateValue>{`${Number(
            detailData.originalPrice
          ).toLocaleString()}원`}</DateValue>
        </SellingPrice>
      </DataArea>
    </div>
  );
}

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 14px;
`;

const DataArea = styled.div`
  display: flex;
  width: 560px;
  padding: 20px 0;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;

const ModelNumber = styled.div`
  flex: 1;
`;

const ReleaseDate = styled(ModelNumber)`
  padding: 0 12px;
  border-left: 1px solid #ebebeb;
`;

const Color = styled(ReleaseDate)``;

const SellingPrice = styled(ReleaseDate)``;

const DateKey = styled.div`
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`;

const DateValue = styled.div`
  margin-top: 6px;
  font-size: 14px;
`;

export default ProductData;
