import React, { useState } from 'react';
import styled from 'styled-components';

const AddAddressModal = ({
  handleClick,
  addressModal,
  writeInfo,
  address,
  setAddress,
  inputValue,
  setInputValue,
}) => {
  const handleAddress = () => {
    addressModal();
    setAddress(writeInfo.address);
    setInputValue(inputValue);
  };

  const { name, detailAddress } = inputValue;
  const getUserInfo = event => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const [addressData, setAddressData] = useState({});
  console.log(writeInfo);
  const postAddress = () => {
    fetch('http://10.58.52.75:3000/users/address', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        address: writeInfo.address,
        detail_address: detailAddress,
        receiver: name,
      }),
    })
      .then(res => res.json())
      .then(result => console.log(result));
  };

  return (
    <AddAddressModalContainer>
      <AddAddressTitleWrap>
        <AddAddressTitle>새 주소 추가</AddAddressTitle>
        <CancelModal>x</CancelModal>
      </AddAddressTitleWrap>
      <NameInputWrap>
        <NameInputTitle>이름</NameInputTitle>
        <NameInput
          placeholder="수령인의 이름"
          name="name"
          value={name}
          onChange={getUserInfo}
        />
      </NameInputWrap>
      <AddressApiInputWrap>
        <AddressApiTitle>주소</AddressApiTitle>
        <AddressButton onClick={handleClick}>우편 번호</AddressButton>
        <AddressApiInput
          placeholder="자동입력 됩니다"
          readOnly
          value={writeInfo.address}
        />
      </AddressApiInputWrap>
      <AddressDetailInputWrap>
        <AddressDetailTitle>상세 주소</AddressDetailTitle>
        <AddressDetail
          placeholder="건물, 아파트, 동/호수 입력"
          name="detailAddress"
          value={detailAddress}
          onChange={getUserInfo}
        />
      </AddressDetailInputWrap>
      <Buttons>
        <CancelBtn
          onClick={() => {
            addressModal();
          }}
        >
          취소
        </CancelBtn>
        <SubmitBtn
          onClick={() => {
            handleAddress();
            postAddress();
          }}
        >
          적용하기
        </SubmitBtn>
      </Buttons>
    </AddAddressModalContainer>
  );
};

const AddAddressModalContainer = styled.div`
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

const AddAddressTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddAddressTitle = styled.h2`
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

const NameInputWrap = styled.div`
  margin-top: 30px;
`;

const NameInputTitle = styled.h2`
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

const AddressApiInputWrap = styled.div`
  margin-top: 30px;
`;

const AddressApiTitle = styled.h2`
  font-weight: 600;
`;

const AddressButton = styled.button`
  width: 90px;
  height: 40px;
  right: 60px;
  border-radius: 12px;
  position: absolute;
  border: 1px solid #bcbcbc;
  background-color: white;
  font-size: 15px;
  font-weight: 400;
  color: #6a6a6a;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const AddressApiInput = styled.input`
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
    letter-spacing: 1px;
    color: #bcbcbc;
  }
`;

const AddressDetailInputWrap = styled.div`
  margin-top: 30px;
`;

const AddressDetailTitle = styled.h2`
  font-weight: 600;
`;
const AddressDetail = styled.input`
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

const CancelBtn = styled.button`
  margin-right: 10px;
  width: 150px;
  height: 55px;
  border: 1px solid gray;
  background-color: white;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 300;
  &:hover {
    cursor: pointer;
  }
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
export default AddAddressModal;
