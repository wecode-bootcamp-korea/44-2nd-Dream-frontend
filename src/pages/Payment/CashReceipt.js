import React from 'react';
import styled from 'styled-components';

const CashReceipt = () => {
  return (
    <CashReceiptContainer>
      <CashReceiptTitle>현금 영수증 정보</CashReceiptTitle>
      <ReceiptFromWrap>
        <ReceiptFromName>형태</ReceiptFromName>
        <ReceiptFrom> 미신청</ReceiptFrom>
      </ReceiptFromWrap>
      <ReceiptDetail>
        판매 거래 시 수수료에 대해 건별로 현금영수증을 발급합니다.
      </ReceiptDetail>
      <ChangeBtn>변경</ChangeBtn>
    </CashReceiptContainer>
  );
};

const CashReceiptContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #ffffff;
  width: 840px;
  padding: 32px;
  margin-top: 8px;
`;

const CashReceiptTitle = styled.div`
  font-weight: 600;
  font-size: 21px;
  margin-bottom: 20px;
`;

const ReceiptFromWrap = styled.div`
  margin-top: 19px;
  display: flex;
`;

const ReceiptFromName = styled.h4`
  color: #a3a3a3;
  width: 100px;
  font-size: 17px;
  letter-spacing: 1px;
`;

const ReceiptFrom = styled.h5`
  font-size: 17px;

  color: #242424;
  letter-spacing: 1px;
`;

const ReceiptDetail = styled.h4`
  margin-top: 20px;
  color: #a3a3a3;
  font-size: 17px;
  letter-spacing: 1px;
`;

const ChangeBtn = styled.button`
  position: absolute;
  right: 40px;
  bottom: 40px;
  width: 60px;
  height: 40px;
  padding: 0 12px 0 12px;
  border-radius: 15px;
  border: 1px solid gray;
  background-color: white;
  font-size: 16px;
  font-weight: 300;
  &:hover {
    cursor: pointer;
  }
`;
export default CashReceipt;
