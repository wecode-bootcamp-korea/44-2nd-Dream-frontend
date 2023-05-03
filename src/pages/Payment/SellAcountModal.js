import React, { useState } from 'react';
import styled from 'styled-components';

const SellAcountModal = ({
  setCalculatedValue,
  accountModal,
  setAccountData,
}) => {
  const [accountValue, setAccountValue] = useState({
    bankName: '',
    account: '',
    holder: '',
    card: '',
  });
  const { bankName, account, holder, card } = accountValue;

  const getAccountInfo = event => {
    const { name, value } = event.target;
    setAccountValue({ ...accountValue, [name]: value });
  };
  console.log(accountValue);
  const handleAccountInfo = () => {
    accountModal();
    setCalculatedValue(accountValue);
  };

  const postAccount = () => {
    fetch('http://10.58.52.75:3000/users/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        cardNumber: card,
        accountNumber: account,
      }),
    })
      .then(res => res.json())
      .then(result => setAccountData(result));
  };

  return (
    <SellAcountModalContainer>
      <SellAcountTitleWrap>
        <SellAcountTitle>새 주소 추가</SellAcountTitle>
        <CancelModal>✕</CancelModal>
      </SellAcountTitleWrap>
      <BanktWrap>
        <BankTitle>은행명</BankTitle>
        <NameInput
          placeholder="선택하세요"
          name="bankName"
          value={bankName}
          onChange={getAccountInfo}
        />
      </BanktWrap>
      <AccountNumberWrap>
        <AccountNumberTitle>계좌번호</AccountNumberTitle>

        <AccountNumber
          placeholder="- 없이 입력하세요"
          name="account"
          value={account}
          onChange={getAccountInfo}
        />
      </AccountNumberWrap>
      <AccountDetailInputWrap>
        <AccountHolderTitle>예금주</AccountHolderTitle>
        <AccountHolderInput
          placeholder="예금주명을 정확히 입력하세요."
          value={holder}
          onChange={getAccountInfo}
          name="holder"
        />
      </AccountDetailInputWrap>
      <CardDetailInputWrap>
        <CardTitle>카드 번호</CardTitle>
        <CardInput
          placeholder="카드번호를 입력해주세요."
          value={card}
          onChange={getAccountInfo}
          name="card"
        />
      </CardDetailInputWrap>
      <Buttons>
        <SubmitBtn
          onClick={() => {
            handleAccountInfo();
            postAccount();
          }}
        >
          적용하기
        </SubmitBtn>
      </Buttons>
    </SellAcountModalContainer>
  );
};

const SellAcountModalContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  width: 580px;
  height: 580px;
  padding: 32px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const SellAcountTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SellAcountTitle = styled.h2`
  display: flex;
  font-size: 21px;
  align-items: center;
  text-align: center;
  font-weight: 700;
`;

const CancelModal = styled.span`
  top: 19px;
  right: 30px;
  position: absolute;
  font-size: 40px;
  font-weight: 300;
  color: gray;
  :hover {
    cursor: pointer;
  }
`;
const BanktWrap = styled.div`
  margin-top: 30px;
`;

const BankTitle = styled.h2`
  font-weight: 600;
`;

const NameInput = styled.input`
  width: 500px;
  font-size: 20px;
  margin-top: 17px;
  border: none;
  border-bottom: 1px solid #ebebeb;
  outline: none;
  margin-bottom: 7px;
  padding-bottom: 12px;
  font-size: 19px;
  ::placeholder {
    color: #bcbcbc;
    letter-spacing: 1px;
  }
`;

const AccountNumberWrap = styled.div`
  margin-top: 30px;
`;

const AccountNumberTitle = styled.h2`
  font-weight: 600;
`;

const AccountNumber = styled.input`
  width: 500px;
  font-size: 20px;
  margin-top: 17px;
  border: none;
  border-bottom: 1px solid #ebebeb;
  outline: none;
  margin-bottom: 7px;
  padding-bottom: 12px;
  font-size: 19px;
  ::placeholder {
    color: #bcbcbc;
    letter-spacing: 1px;
  }
`;

const AccountDetailInputWrap = styled.div`
  margin-top: 30px;
`;

const AccountHolderTitle = styled.h2`
  font-weight: 600;
`;

const AccountHolderInput = styled.input`
  width: 500px;
  font-size: 20px;
  margin-top: 17px;
  border: none;
  border-bottom: 1px solid #ebebeb;
  outline: none;
  margin-bottom: 7px;
  padding-bottom: 12px;
  font-size: 19px;
  ::placeholder {
    color: #bcbcbc;
    letter-spacing: 1px;
  }
`;

const CardDetailInputWrap = styled.div`
  margin-top: 30px;
`;

const CardTitle = styled.h2`
  font-weight: 600;
`;

const CardInput = styled.input`
  width: 500px;
  font-size: 20px;
  margin-top: 17px;
  border: none;
  border-bottom: 1px solid #ebebeb;
  outline: none;
  margin-bottom: 7px;
  padding-bottom: 12px;
  font-size: 19px;
  ::placeholder {
    color: #bcbcbc;
    letter-spacing: 1px;
  }
`;

const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const SubmitBtn = styled.button`
  width: 150px;
  height: 55px;
  border: none;
  background-color: black;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

export default SellAcountModal;
