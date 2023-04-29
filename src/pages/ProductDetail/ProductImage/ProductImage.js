import React from 'react';
import styled from 'styled-components';

function ProductImage({ fixed, detailData }) {
  return (
    <ImageArea ref={fixed}>
      <ItemImage imageUrl={detailData.imageUrl} />
      <AttentionArea>
        <div>
          <Attention>주의</Attention>
          <Title>판매 거래 주의사항</Title>
          <Content>반드시 보유한 상품만 판매하세요.</Content>
        </div>
        <ArrowBtn>→</ArrowBtn>
      </AttentionArea>
    </ImageArea>
  );
}

const ImageArea = styled.div`
  position: fixed;
  left: 18%;
  width: 600px;
  padding-right: 40px;
`;

const ItemImage = styled.div`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  width: 560px;
  height: 560px;
`;

const AttentionArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 17px;
  padding: 11px;
  border: 1px solid rgba(34, 34, 34, 0.05);
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
`;
const Attention = styled.span`
  display: inline-block;
  padding: 5px 5px 3px 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  background-color: #ff8824;
`;
const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
`;
const Content = styled.div`
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`;
const ArrowBtn = styled.div`
  font-size: 35px;
  padding-top: 8px;
  padding-right: 10px;
`;
export default ProductImage;
