import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import AddressInfo from './AddressInfo';
import Point from './Point';
import FinalOrderInfo from './FinalOrderInfo';
import SellAccount from './SellAcount';
import CashReceipt from './CashReceipt';
import CheckAgree from './CheckAgree';
import PaymentMethod from './PaymentMethod';
import { useParams } from 'react-router-dom';
import tossPay from './Toss';
import { api } from '../../api';

const Payment = ({ pageMode, currentBtn }) => {
  const [writeInfo, setWriteInfo] = useState({ address: '' });
  const params = useParams();
  const paramsId = params.id;
  const [bidData, setBidData] = useState({});
  const bidtype = pageMode ? 'buying' : 'selling';
  const token = localStorage.getItem('token');
  const [openAddress, setOpenAddress] = useState(false);
  const [openBook, setOpenBook] = useState(false);
  useEffect(() => {
    fetch(`${api.payment}/biddingin/${paramsId}?bidtype=${bidtype}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(result => setBidData(result));
  }, []);

  const [openAccount, setOpenAccount] = useState(false);
  const [addressStorage, setAddressStorage] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const confirmModal = () => {
    setOpenModal(prev => !prev);
  };

  const [addressData, setAddressData] = useState({});
  const [accountData, setAccountData] = useState({});
  const [inputValue, setInputValue] = useState({
    name: '',
    detailAddress: '',
  });

  const addressModal = () => {
    setOpenAddress(prev => !prev);
  };

  const addressBookModal = () => {
    setOpenBook(prev => !prev);
  };

  const accountModal = () => {
    setOpenAccount(prev => !prev);
  };

  const [calculatedValue, setCalculatedValue] = useState({});

  return (
    <Content>
      <ProductInfo pageMode={pageMode} bidData={bidData} />

      {!pageMode && (
        <SellAccount
          pageMode={pageMode}
          accountModal={accountModal}
          openAccount={openAccount}
          calculatedValue={calculatedValue}
          setCalculatedValue={setCalculatedValue}
          setAccountData={setAccountData}
        />
      )}

      <AddressInfo
        addressStorage={addressStorage}
        setAddressStorage={setAddressStorage}
        writeInfo={writeInfo}
        setWriteInfo={setWriteInfo}
        openModal={openModal}
        confirmModal={confirmModal}
        pageMode={pageMode}
        openAddress={openAddress}
        addressModal={addressModal}
        addressBookModal={addressBookModal}
        openBook={openBook}
        addressData={addressData}
        setAddressData={setAddressData}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      {pageMode && <Point pageMode={pageMode} />}

      <FinalOrderInfo
        pageMode={pageMode}
        bidData={bidData}
        currentBtn={currentBtn}
      />

      {pageMode ? <PaymentMethod /> : <CashReceipt />}

      <CheckAgree
        inputValue={inputValue}
        tossPay={tossPay}
        pageMode={pageMode}
        bidData={bidData}
        writeInfo={writeInfo}
        currentBtn={currentBtn}
        addressData={addressData}
        accountData={accountData}
        addressStorage={addressStorage}
      />
    </Content>
  );
};
const Content = styled.div`
  position: relative;
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: column;
  background-color: #fafafa;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
`;

export default Payment;
