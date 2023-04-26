import React, { useState } from 'react';
import styled from 'styled-components';

const PaymentMethod = () => {
  const [payMehtodId, setPayMehtodId] = useState(0);

  const handleMehtod = methodId => {
    setPayMehtodId(methodId);
  };

  return (
    <PaymentMethodContainer>
      <PaymentMethodTitle>결제 방법</PaymentMethodTitle>
      <EasyPaymentWrap>
        <EasyPaymentTitle>계좌 간편결제</EasyPaymentTitle>
        <EasyPaymentPoint>결제 시 포인트 적립</EasyPaymentPoint>
      </EasyPaymentWrap>
      <RegisterCard placeholder="계좌를 등록해 주세요" />
      <NormalPaymentWrap>
        <NormalPayment>일반 결제</NormalPayment>
        <NormalPaymentSeperate>일시불・할부</NormalPaymentSeperate>
      </NormalPaymentWrap>
      <CardSortWrap>
        {CARD_CORPERATE.map(card => {
          return (
            <CardSort
              key={card.id}
              id={card.id}
              payMehtodId={payMehtodId}
              onClick={() => handleMehtod(card.id)}
            >
              <CardName>{card.name}</CardName>
              <CardLogo url={card.image} />
            </CardSort>
          );
        })}
      </CardSortWrap>

      {CARD_DETAIL.map(detail => {
        return (
          <CardDetailContainer key={detail.id}>
            <CardDetailWrap>
              <CardDetailName>{detail.name}</CardDetailName>
              <CardDetailDetail>{detail.detail} </CardDetailDetail>
            </CardDetailWrap>
            <ShowMore>더보기</ShowMore>
          </CardDetailContainer>
        );
      })}
    </PaymentMethodContainer>
  );
};

const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 840px;
  padding: 32px;
  margin-top: 8px;
`;

const PaymentMethodTitle = styled.h2`
  font-weight: 600;
  font-size: 21px;
  margin-bottom: 20px;
`;

const EasyPaymentWrap = styled.div`
  display: flex;
  align-items: center;
`;

const EasyPaymentTitle = styled.h3`
  color: #424242;
  font-size: 19px;
  margin-right: 5px;
`;

const EasyPaymentPoint = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f0ff;
  color: #837aef;
  padding: 9px 3px;
  font-size: 14px;
`;

const RegisterCard = styled.input`
  margin-top: 15px;
  border: 1px solid gray;
  border-radius: 12px;
  height: 50px;
  margin-bottom: 30px;
`;

const NormalPaymentWrap = styled.div`
  display: flex;
  align-items: center;
`;

const NormalPayment = styled.h2`
  font-weight: 600;
  font-size: 21px;
`;

const NormalPaymentSeperate = styled.h4`
  font-size: 14px;
  font-weight: 300;
  color: #909090;
  margin-left: 10px;
`;

const CardSortWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardSort = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 248px;
  height: 60px;
  /* border: 1px solid #a3a3a3; */
  border-radius: 12px;
  padding: 7px 7px 8px 11px;
  margin-right: 10px;
  margin-top: 10px;
  border: ${props =>
    props.id === props.payMehtodId
      ? '1.5px solid #4a4a4a'
      : '1px solid #a3a3a3'};
  &:hover {
    cursor: pointer;
  }
`;

const CardName = styled.span`
  font-size: 16px;
`;

const CardLogo = styled.div`
  width: 47px;
  height: 47px;
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const CardDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardDetailWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const CardDetailName = styled.h2`
  color: #6f747f;
  margin-right: 30px;
  width: 100px;
`;

const CardDetailDetail = styled.span`
  color: #a0a0a0;
`;

const ShowMore = styled.p`
  margin-top: 20px;
  color: #aaaaaa;
  border-bottom: 1px solid #a0a0a0;
`;

export default PaymentMethod;

const CARD_CORPERATE = [
  {
    id: 1,
    name: '신용카드',
  },
  {
    id: 2,
    name: '네이버',
    image: '/images/naverpay.png',
  },
  {
    id: 3,
    name: '카카오페이',
    image: '/images/kakakopay.jpeg',
  },
  {
    id: 4,
    name: '토스페이',
    image: '/images/toss.jpeg',
  },
  {
    id: 5,
    name: '페이코',
    image: '/images/payco.jpeg',
  },
];

const CARD_DETAIL = [
  { id: 1, name: '계좌간편결제', detail: '최대 5만 포인트 적립 & 수수료 할인' },
  { id: 2, name: '페이코', detail: '포인트 결제 시 즉시할인 1만원' },
  { id: 3, name: '네이버페이', detail: '네이버페이최대 20,000원 포인트 지급' },
  { id: 4, name: '카카오페이', detail: 'KB국민카드/카카오페이머니 즉시할인' },
  { id: 5, name: '토스', detail: '첫 결제 3천원 캐시백 & 후불결제' },
  { id: 6, name: '롯데카드', detail: '20만원 이상 결제 시 즉시할인 6%' },
  { id: 7, name: '우리카드', detail: '우리카드로 결제 시 드로우 자동응모' },
];
