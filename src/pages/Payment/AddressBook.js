import React, { useEffect } from 'react';
import styled from 'styled-components';

const AddressBook = ({
  bookModalData,
  setBookModalData,
  addressBookModal,
  setAddress,
  address,
  addressStorage,
  setAddressStorage,
  setInputValue,
}) => {
  const selectAddressBook = (name, address, detail_address) => {
    addressBookModal();
    setInputValue({ name });
    setAddress(address + detail_address);
  };

  useEffect(() => {
    fetch('http://10.58.52.75:3000/users/address', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => setAddressStorage(result));
  }, []);
  console.log(addressStorage);
  return (
    <AddressBookContainer>
      <AddressBookWrap>
        <AddressBookTitle>주소록</AddressBookTitle>
        <Cancel onClick={() => addressBookModal()}>✕</Cancel>
      </AddressBookWrap>

      {addressStorage.map(info => {
        return (
          <AddressInfoWrap
            key={info.addressId}
            onClick={() =>
              selectAddressBook(
                info.receiver,
                info.address,
                info.detail_address
              )
            }
          >
            <InfoName>{info.receiver}</InfoName>
            <InfoAddress>
              {info.address}
              {info.detail_address}
            </InfoAddress>
          </AddressInfoWrap>
        );
      })}
    </AddressBookContainer>
  );
};

const AddressBookContainer = styled.div`
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
  overflow-y: scroll;
`;

const AddressBookWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddressBookTitle = styled.h2`
  display: flex;
  font-size: 21px;
  align-items: center;
  text-align: center;
  font-weight: 700;
`;

const Cancel = styled.span`
  top: 28px;
  right: 33px;
  position: absolute;
  font-size: 27px;
  color: #656565;
  :hover {
    cursor: pointer;
  }
`;

const AddressInfoWrap = styled.div`
  margin-top: 30px;
  height: 80px;
  border-bottom: 2px solid #f4f4f4;
  &:hover {
    cursor: pointer;
  }
`;

const InfoName = styled.h2`
  font-weight: 600;
  font-size: 18px;
`;

const InfoAddress = styled.p`
  margin-top: 10px;
  font-size: 17px;
  font-weight: 400;
  color: #656565;
`;

export default AddressBook;
