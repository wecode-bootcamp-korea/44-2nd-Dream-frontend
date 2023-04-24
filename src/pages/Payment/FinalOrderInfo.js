import React from 'react';
import styled from 'styled-components';
const FinalOrderInfo = () => {
  return (
    <FinalOrderInfoContainer>
      <FinalOrderInfoTitle>최종 주문 정보</FinalOrderInfoTitle>
      <FinalOrderInfoPriceTitle> 총 결제 금액</FinalOrderInfoPriceTitle>
      <FinalOrderInfoPrice>33,900원</FinalOrderInfoPrice>
      <OrderBorder />
      <PriceHopeWrap>
        <PriceHopeName> 구매 희망가</PriceHopeName>
        <PriceHopeInfo> 30.000원</PriceHopeInfo>
      </PriceHopeWrap>
      <PointWrap>
        <PointName>포인트</PointName>
        <PointPrice>-</PointPrice>
      </PointWrap>
      <InspectionWrap>
        <InspectName>검수비</InspectName>
        <InspectPrice>무료</InspectPrice>
      </InspectionWrap>
      <Feewrap>
        <FeeName>수수료</FeeName>
        <FeePrice>900원</FeePrice>
      </Feewrap>
      <DeliveryWrap>
        <DeliveryName>배송비</DeliveryName>
        <DeliveryPrice>3,000원</DeliveryPrice>
      </DeliveryWrap>

      <Border />

      <BidDeadlineWrap>
        <BidDeadlineName>입찰 마감 기한</BidDeadlineName>
        <BidDeadlineDate>7일 - 2023/04/30까지</BidDeadlineDate>
      </BidDeadlineWrap>
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
  color: #f15746;
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
