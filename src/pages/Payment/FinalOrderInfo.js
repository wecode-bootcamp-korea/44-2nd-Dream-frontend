import React from 'react';
import styled from 'styled-components';
const FinalOrderInfo = ({ pageMode, bidPrice, commission, dueDate }) => {
  // console.log('bidPrice', bidPrice);
  return (
    <FinalOrderInfoContainer>
      <FinalOrderInfoTitle>최종 주문 정보</FinalOrderInfoTitle>
      <FinalOrderInfoPriceTitle>
        {pageMode === '구매' ? '총 결제 금액' : '정산금액'}
      </FinalOrderInfoPriceTitle>
      <FinalOrderInfoPrice pageMode={pageMode}>
        {(bidPrice + commission)?.toLocaleString()}원
      </FinalOrderInfoPrice>
      <OrderBorder />
      <PriceHopeWrap>
        <PriceHopeName>
          {pageMode === '구매' ? '구매 희망가' : '즉시 판매가'}
        </PriceHopeName>
        <PriceHopeInfo>{bidPrice?.toLocaleString()}원 </PriceHopeInfo>
      </PriceHopeWrap>

      {pageMode === '구매' && (
        <PointWrap pageMode={pageMode}>
          <PointName>포인트</PointName>
          <PointPrice>-</PointPrice>
        </PointWrap>
      )}

      <InspectionWrap>
        <InspectName>검수비</InspectName>
        <InspectPrice>무료</InspectPrice>
      </InspectionWrap>
      <Feewrap>
        <FeeName>수수료</FeeName>
        <FeePrice>{pageMode === '구매' ? commission : -commission}원</FeePrice>
      </Feewrap>
      <DeliveryWrap>
        <DeliveryName>배송비</DeliveryName>
        <DeliveryPrice>
          {pageMode === '구매' ? '무료' : '선불 ・ 판매자 부담'}
        </DeliveryPrice>
      </DeliveryWrap>
      {pageMode === '구매' && (
        <>
          <Border />
          <BidDeadlineWrap>
            <BidDeadlineName>입찰 마감 기한</BidDeadlineName>
            <BidDeadlineDate>7일 - {dueDate}까지</BidDeadlineDate>
          </BidDeadlineWrap>
        </>
      )}
    </FinalOrderInfoContainer>
  );
};
const FinalOrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 840px;
  padding: 32px;
  margin-top: 8px;
`;

const FinalOrderInfoTitle = styled.h2`
  font-weight: 600;
  font-size: 21px;
  margin-bottom: 20px;
`;
const FinalOrderInfoPriceTitle = styled.h3`
  font-weight: 500;
  font-size: 17px;
`;

const FinalOrderInfoPrice = styled.p`
  align-self: flex-end;
  color: ${({ pageMode }) => (pageMode === '구매' ? '#f15746' : '#41b978')};
  font-size: 27px;
  font-style: italic;
  padding-bottom: 25px;
`;

const OrderBorder = styled.div`
  border-bottom: 1.3px solid gray;
`;

const PriceHopeWrap = styled.div`
  margin-top: 19px;
  display: flex;
  justify-content: space-between;
`;

const PriceHopeName = styled.h4`
  color: #323232;
  font-size: 16px;
`;

const PriceHopeInfo = styled.h5`
  color: #424242;
  font-weight: bold;
  font-size: 18px;
`;

const PointWrap = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
`;
const PointName = styled.h4`
  color: #a3a3a3;
`;
const PointPrice = styled.h5`
  color: #242424;
`;

const InspectionWrap = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
`;
const InspectName = styled.h4`
  color: #a3a3a3;
`;
const InspectPrice = styled.h5`
  color: #242424;
`;

const Feewrap = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
`;
const FeeName = styled.h4`
  color: #a3a3a3;
`;
const FeePrice = styled.h5`
  color: #242424;
`;

const DeliveryWrap = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
`;
const DeliveryName = styled.h4`
  color: #a3a3a3;
`;
const DeliveryPrice = styled.h5`
  color: #242424;
`;

const Border = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid #a3a3a3;
`;

const BidDeadlineWrap = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;
const BidDeadlineName = styled.h4`
  color: #585858;
`;
const BidDeadlineDate = styled.h5`
  color: #242424;
`;
export default FinalOrderInfo;
