import React from 'react';
import styled from 'styled-components';
const Point = () => {
  return (
    <PointContainer>
      <PointTitle>포인트</PointTitle>
      <MaxPointWrap>
        <MaxPont placeholder="결제 시점에 최대 사용" />
        <MaxButton>최대 사용</MaxButton>
      </MaxPointWrap>
      <RetentionPointWrap>
        <RetentionName>보유포인트</RetentionName>
        <RetentionPoint>0P</RetentionPoint>
      </RetentionPointWrap>
      <PointDetail>
        구매 입찰은 '최대 사용만'만 선택 가능하며, 거래 체결 시점에 보유한 모든
        포인트를 사용합니다.
      </PointDetail>
    </PointContainer>
  );
};
const PointContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 840px;

  padding: 32px;
  margin-top: 13px;
  background-color: white;
`;

const PointTitle = styled.h2`
  font-weight: 600;
  font-size: 21px;
  margin-bottom: 20px;
`;

const MaxPointWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MaxPont = styled.input`
  width: 680px;
  font-size: 16px;
  border-radius: 12px;
  padding: 20px 0 20px 16px;
  border: 1px solid #a3a3a3;
  margin-right: 6px;
`;

const MaxButton = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 12px;
  font-size: 15px;
  cursor: pointer;
  letter-spacing: -0.06px;
  line-height: 14px;
  padding: 5px 10px;
  color: white;
  background-color: #333;
`;

const RetentionPointWrap = styled.div`
  display: flex;
  margin-top: 14px;
`;

const RetentionName = styled.p`
  color: #a3a3a3;
  font-size: 17px;
`;

const RetentionPoint = styled.p`
  margin-left: 10px;
  font-size: 17px;
  padding-bottom: 20px;
`;

const PointDetail = styled.p`
  font-weight: 300;
`;
export default Point;
