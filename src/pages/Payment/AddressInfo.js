import React from 'react';
import styled from 'styled-components';

const AddressInfo = () => {
  return (
    <AddressContainer>
      <AddressTitleWrap>
        <AddressTitle>배송 주소</AddressTitle>
        <AddressPlus> + 새 주소 추가</AddressPlus>
      </AddressTitleWrap>
      <ReceiverWrap>
        <ReceiverTitle>받는 분</ReceiverTitle>
        <ReceiverName>조건호</ReceiverName>
      </ReceiverWrap>
      <DeliveryAddressWrap>
        <DeliveryTitle>배송 주소</DeliveryTitle>
        <DeliveryDetail>
          서울 송파구 중대로 24(문정동, 올림픽훼미리타운)
        </DeliveryDetail>
      </DeliveryAddressWrap>
      <SelectRequest />
      <Border />
      <DeliveryMethodWrap>
        <DeliveryMethodTitle>배송 방법</DeliveryMethodTitle>
        <DeliveryNomralWrap>
          <NormalDeliveryImage src="https://kream-phinf.pstatic.net/MjAyMTExMjlfMTQ4/MDAxNjM4MTc4MjI5NTk3.2phJLPtRvFqViNfhZu06HzNRiUBlT4cmZR4_Ukqsyesg.ikrfWOrL7WXCVO0Rqy5kMvOn3B2YpjLUj6RuJqosPX0g.PNG/a_8b54cbca40e945f4abf1ee24bdd031f7.png" />
          <NormalMethodLetter>
            <DeliveryNoraml>일반배송 3,000원</DeliveryNoraml>
            <AfterDelivery>검수 후 배송 ∙ 5-7일 내 도착 예정</AfterDelivery>
          </NormalMethodLetter>
        </DeliveryNomralWrap>
        <DeliveryNomralWrap>
          <NormalDeliveryImage src="https://kream-phinf.pstatic.net/MjAyMTExMjlfMTQ4/MDAxNjM4MTc4MjI5NTk3.2phJLPtRvFqViNfhZu06HzNRiUBlT4cmZR4_Ukqsyesg.ikrfWOrL7WXCVO0Rqy5kMvOn3B2YpjLUj6RuJqosPX0g.PNG/a_8b54cbca40e945f4abf1ee24bdd031f7.png" />
          <NormalMethodLetter>
            <DeliveryNoraml>창고보관 첫 30일 무료</DeliveryNoraml>
            <AfterDelivery>
              배송 없이 창고에 보관 ∙ 빠르게 판매 가능
            </AfterDelivery>
          </NormalMethodLetter>
        </DeliveryNomralWrap>
        {/* <DeliveryStorage /> */}
      </DeliveryMethodWrap>
    </AddressContainer>
  );
};
const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 840px;
  padding: 32px;
  margin-top: 8px;
`;

const AddressTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddressTitle = styled.h2`
  font-weight: 600;
  font-size: 21px;
  margin-bottom: 20px;
`;

const AddressPlus = styled.button`
  border: none;
  background-color: #ffffff;
  color: #a3a3a3;
  font-size: 17px;
`;

const ReceiverWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

const ReceiverTitle = styled.h2`
  color: #a3a3a3;
`;

const ReceiverName = styled.p`
  font-size: 16px;
  margin-left: 40px;
`;

const DeliveryAddressWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
`;

const DeliveryTitle = styled.h3`
  color: #a3a3a3;
`;

const DeliveryDetail = styled.p`
  font-size: 16px;
  margin-left: 24px;
`;

const SelectRequest = styled.select`
  border: 1px solid gray;
  border-radius: 12px;
  height: 50px;
  margin-bottom: 30px;
`;

const Border = styled.div`
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
`;

const DeliveryMethodWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const DeliveryMethodTitle = styled.h3`
  font-weight: 600;
  font-size: 21px;
  margin-bottom: 20px;
`;

const DeliveryNomralWrap = styled.div`
  display: flex;
  border: 1px solid gray;
  height: 70px;
  border-radius: 12px;
  align-items: center;
  margin-bottom: 8px;
  /* padding-top: 40px;
  padding-bottom: 40px; */

  &:focus {
    border: 1px solid black;
  }
`;

const NormalDeliveryImage = styled.img`
  width: 40px;
  height: 40px;
  background-color: red;
  margin-left: 15px;
  margin-right: 10px;
  border-radius: 50%;
`;

const NormalMethodLetter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const DeliveryNoraml = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;

const AfterDelivery = styled.div`
  color: #a3a3a3;
  margin-top: -3px;
`;

export default AddressInfo;
