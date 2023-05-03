import React, { useState } from 'react';
import styled from 'styled-components';
import SellAcountModal from './SellAcountModal';

const SellAccount = ({
  accountModal,
  openAccount,
  calculatedValue,
  setCalculatedValue,
  setAccountData,
}) => {
  const { bankName, account, holder, card } = calculatedValue;
  return (
    <SellAccountContainer>
      <SellAcountTitle> 판매 정산 계좌</SellAcountTitle>
      <AccountWrap>
        <AccountTitle>계좌</AccountTitle>
        <AccountInfo>
          {bankName} {account}
        </AccountInfo>
      </AccountWrap>
      <AccountNameWrap>
        <AccountNameDetail>
          <AccountNameTitle>예금주</AccountNameTitle>
          <AccountName>{holder}</AccountName>
        </AccountNameDetail>

        <ChangeBtn onClick={accountModal}>변경</ChangeBtn>
      </AccountNameWrap>
      {openAccount && (
        <SellAcountModal
          setCalculatedValue={setCalculatedValue}
          accountModal={accountModal}
          setAccountData={setAccountData}
        />
      )}
      <AccountNameDetail>
        <AccountNameTitle>카드 번호</AccountNameTitle>
        <AccountName>{card}</AccountName>
      </AccountNameDetail>
      {openAccount && <BlackModal onClick={() => accountModal()} />}
    </SellAccountContainer>
  );
};

const SellAccountContainer = styled.div`
  display: flex;

  flex-direction: column;
  background-color: #ffffff;
  width: 840px;
  padding: 32px;
  margin-top: 8px;
`;

const SellAcountTitle = styled.h2`
  font-weight: 600;
  font-size: 21px;
  margin-bottom: 20px;
`;
const AccountWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

const AccountTitle = styled.h3`
  color: #a3a3a3;
  width: 60px;
`;

const AccountInfo = styled.p`
  font-size: 16px;
  margin-left: 40px;
`;

const AccountNameWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
`;

const AccountNameDetail = styled.div`
  display: flex;
`;

const AccountNameTitle = styled.h3`
  color: #a3a3a3;
  width: 60px;
`;

const AccountName = styled.p`
  font-size: 16px;
  margin-left: 40px;
`;

const ChangeBtn = styled.button`
  width: 60px;
  height: 40px;
  margin-top: -35px;
  /* margin-right: 5px; */
  font-size: 15px;
  background-color: white;
  border: 1px solid #bcbcbc;
  border-radius: 12px;
  color: #6a6a6a;
  &:hover {
    cursor: pointer;
  }
`;

const BlackModal = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
export default SellAccount;
