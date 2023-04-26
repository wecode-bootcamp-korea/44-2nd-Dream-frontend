import React from 'react';
import styled from 'styled-components';

const SellAccount = ({ pageMode }) => {
  return (
    <SellAccountContainer>
      <SellAcountTitle> 판매 정산 계좌</SellAcountTitle>
      <AccountWrap>
        <AccountTitle>계좌</AccountTitle>
        <AccountInfo>국민은행 35040204064895</AccountInfo>
      </AccountWrap>
      <AccountNameWrap>
        <AccountNameTitle>예금주</AccountNameTitle>
        <AccountName>조건호</AccountName>
      </AccountNameWrap>
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
  width: 40px;
`;

const AccountInfo = styled.p`
  font-size: 16px;
  margin-left: 40px;
`;

const AccountNameWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
`;

const AccountNameTitle = styled.h3`
  color: #a3a3a3;
`;

const AccountName = styled.p`
  font-size: 16px;
  margin-left: 40px;
`;

export default SellAccount;
