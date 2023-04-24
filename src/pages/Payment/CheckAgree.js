import React from 'react';
import styled from 'styled-components';

const CheckAgree = () => {
  return (
    <CheckAgreeContainer>
      {AGREE_DATA.map(value => {
        return (
          <>
            <AllDetail key={value.id}>
              <CheckDetailWrap>
                <CheckAgreeDetail id={value.id}>{value.title}</CheckAgreeDetail>
                <CheckSub>{value.sub}</CheckSub>
              </CheckDetailWrap>
              <StyledLabel>
                <StyledInput type="checkbox" />
              </StyledLabel>
            </AllDetail>
            <Border id={value.id} />
          </>
        );
      })}
      <TotalPriceWrap>
        <TotalPriceName>총 결제금액</TotalPriceName>
        <TotalPrice>1,576,200원</TotalPrice>
      </TotalPriceWrap>
      <PaymentButton>결제하기</PaymentButton>
    </CheckAgreeContainer>
  );
};

const CheckAgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 840px;
  padding: 32px;
  margin-top: 8px;
`;

const AllDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

const CheckDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  appearance: none;
  width: 2rem;
  height: 2rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.2rem;

  &:checked {
    border-color: transparent;
    background-color: black;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const CheckAgreeDetail = styled.h3`
  font-size: ${props => (props.id === 4 ? '20px' : '19px')};
  font-weight: ${props => props.id === 4 && 'bold'};
  margin-bottom: 12px;
  padding-top: 15px;
  color: #3e3e3e;
  flex-wrap: wrap;
  width: 660px;
`;

const CheckSub = styled.p`
  font-size: 16px;
  color: #a3a3a3;
`;

const CheckBox = styled.div`
  width: 30px;
  height: 30px;
`;

const Border = styled.div`
  border-bottom: ${props =>
    props.id === 4 ? '1px solid none' : '1px solid #a3a3a3'};
`;

const TotalPriceWrap = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalPriceName = styled.h2`
  font-weight: bold;
  font-size: 20px;
`;

const TotalPrice = styled.span`
  color: #f15746;
  font-size: 27px;
  font-style: italic;
  font-weight: bold;
`;

const PaymentButton = styled.button`
  font-weight: 600;
  margin-top: 10px;
  height: 52px;
  border-radius: 12px;
  letter-spacing: -0.16px;
  font-size: 16px;
  border: none;
  color: white;
`;

export default CheckAgree;

const AGREE_DATA = [
  {
    id: 1,
    title:
      '판매자의 판매거부, 배송지연, 미입고 등의 사유가 발생할 경우, 거래가취소될 수 있습니다.',
    sub: '앱 알림 해제, 알림푹 차단, 전화번호 변경 후 미등록 시에는 거래 진행 상태 알람을 받을 수 없습니다.',
  },
  {
    id: 2,
    title:
      '창고 보관을 선택한 경우, 구매자에게 배송되지 않고 DREAM 창고에 보관됩니다.',
    sub: '검수 합격 후 보관이 완료되면 창고 이용료(현재 첫 30일 무료)가 결제됩니다.',
  },
  {
    id: 3,
    title:
      " '바로 결제하기' 를 선택하시면 즉시 결제가 진행되며, 단순 변심이나 실수에 의한 취소가 불가능합니다.",
    sub: '본 거래는 개인간 거래로 전자상거래법(법 17조)에 따른 청약철회(환불, 교환) 규정이 적용되지 않습니다.',
  },
  {
    id: 4,
    title: '구매 조건을 모두 확인하였으며, 거래 진행에 동의합니다.',
    // sub: '앱 알림 해제, 알림푹 차단, 전화번호 변경 후 미등록 시에는 거래 진행 상태 알람을 받을 수 없습니다.',
  },
];
