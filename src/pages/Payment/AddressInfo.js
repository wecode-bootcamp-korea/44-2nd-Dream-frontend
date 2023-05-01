import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import styled from 'styled-components';
import DeliveryModal from './DeliveryModal';
import AddAddressModal from './AddAddressModal';
import AddressBook from './\bAddressBook';

const AddressInfo = ({
  openModal,
  openAddress,
  openBook,
  confirmModal,
  pageMode,
  addressModal,
  setOpenAddress,
  addressBookModal,
  writeInfo,
  setWriteInfo,
}) => {
  const [message, setMessage] = useState('배송 시 요청사항을 선택하세요');
  const [address, setAddress] = useState('');

  const [inputValue, setInputValue] = useState({
    name: '',
    detailAddress: '',
  });

  const scriptUrl =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setWriteInfo({ ...writeInfo, address: fullAddress });
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const [addressStorage, setAddressStorage] = useState([]);

  const [bookModalData, setBookModalData] = useState([]);

  return (
    <AddressContainer>
      <AddressTitleWrap>
        <AddressTitle>{pageMode ? '배송' : '반송'} 주소</AddressTitle>
        <AddressPlus onClick={addressModal}>+ 새 주소 추가</AddressPlus>
      </AddressTitleWrap>
      {openAddress && (
        <AddAddressModal
          addressModal={addressModal}
          handleClick={handleClick}
          writeInfo={writeInfo}
          setAddress={setAddress}
          address={address}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
      {openAddress && <BlackModal onClick={() => addressModal()} />}
      <ReceiverWrap>
        <ReceiverTitle>받는 분</ReceiverTitle>
        <ReceiverName>{inputValue.name}</ReceiverName>
      </ReceiverWrap>
      <DeliveryAddressContainer>
        <DeliveryAddressWrap>
          <DeliveryTitle>{pageMode ? '배송' : '반송'} 주소</DeliveryTitle>
          <DeliveryDetail>
            <p>
              {address}
              {inputValue.detailAddress}
            </p>
          </DeliveryDetail>
        </DeliveryAddressWrap>
        <ChangeBtn onClick={addressBookModal}>변경</ChangeBtn>
      </DeliveryAddressContainer>
      {openBook && (
        <AddressBook
          setBookModalData={setBookModalData}
          addressBookModal={addressBookModal}
          bookModalData={bookModalData}
          address={address}
          setAddress={setAddress}
          setAddressStorage={setAddressStorage}
          addressStorage={addressStorage}
          setInputValue={setInputValue}
        />
      )}
      {openBook && <BlackModal onClick={() => addressBookModal()} />}
      <SelectRequest onClick={confirmModal} message={message}>
        <p>{message}</p> <span> {'>'} </span>
      </SelectRequest>
      {openModal && (
        <DeliveryModal confirmModal={confirmModal} setMessage={setMessage} />
      )}
      {openModal && <BlackModal onClick={() => confirmModal()} />}
      <Border />
      <DeliveryMethodWrap>
        <DeliveryMethodTitle>
          {pageMode ? '배송' : '반송'} 방법
        </DeliveryMethodTitle>

        {pageMode ? (
          <>
            {DELIVERY_METHOD.map(value => {
              return (
                <DeliveryNomralWrap key={value.id}>
                  <NormalDeliveryImage url={value.image} />
                  <NormalMethodLetter>
                    <DeliveryNoraml>{value.name}</DeliveryNoraml>
                    <AfterDelivery>{value.due} </AfterDelivery>
                  </NormalMethodLetter>
                </DeliveryNomralWrap>
              );
            })}
          </>
        ) : (
          <>
            {REDELIVERY_METHOD.map(value => {
              return (
                <DeliveryNomralWrap key={value.id}>
                  <NormalDeliveryImage url={value.image} />
                  <NormalMethodLetter>
                    <DeliveryNoraml>{value.name}</DeliveryNoraml>
                    <AfterDelivery>{value.due} </AfterDelivery>
                  </NormalMethodLetter>
                </DeliveryNomralWrap>
              );
            })}
          </>
        )}
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
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
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

const DeliveryDetail = styled.div`
  font-size: 16px;
  margin-left: 24px;
  border: none;
  width: 500px;
`;

const ChangeBtn = styled.button`
  /* position: absolute;
  right: 550px;
  top: 340px; */
  width: 60px;
  height: 40px;
  margin-top: -35px;
  font-size: 15px;
  background-color: white;
  border: 1px solid #bcbcbc;
  border-radius: 12px;
  color: #6a6a6a;
  &:hover {
    cursor: pointer;
  }
`;

const SelectRequest = styled.button`
  display: flex;
  align-items: center;
  align-content: flex-start;
  font-size: 17px;
  border: 1px solid gray;
  color: ${props =>
    props.message === '배송 시 요청사항을 선택하세요' ? '#c4c4c4' : 'black'};

  border-radius: 12px;
  justify-content: space-between;
  height: 70px;
  margin-bottom: 30px;
  background-color: white;
  padding: 14px 12px;

  &:hover {
    cursor: pointer;
  }

  span {
    color: black;
    font-size: 24px;
  }
`;

const BlackModal = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
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

const DeliveryAddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  &:focus {
    border: 1px solid black;
  }
`;

const NormalDeliveryImage = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
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

const DELIVERY_METHOD = [
  {
    id: 1,
    image: '/images/box.png',
    name: '일반배송 3,300원',
    due: '검수 후 배송 ∙ 5-7일 내 도착 예정 ',
  },
  {
    id: 2,
    image: '/images/storage.png',
    name: '창고보관 첫 30일 무료',
    due: '배송 없이 창고에 보관 ∙ 빠르게 판매 가능 ',
  },
];

const REDELIVERY_METHOD = [
  {
    id: 1,
    image: '/images/box.png',
    name: '택배발송 선불',
    due: '착불 발송 시 정산 금액에서 차감',
  },
];
