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
import { useSearchParams, useParams } from 'react-router-dom';
import tossPay from './Toss';
import { api } from '../../api';

const Payment = ({ pageMode, currentBtn }) => {
  const [writeInfo, setWriteInfo] = useState({ address: '' });

  const [openModal, setOpenModal] = useState(false);
  const confirmModal = () => {
    setOpenModal(prev => !prev);
  };

  const params = useParams;
  const productId = params.id;

  const [openAddress, setOpenAddress] = useState(false);
  const [openBook, setOpenBook] = useState(false);
  const [bidData, setBidData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const buyingParams = () => {
    searchParams.set('bidtype', 'buying');
    setSearchParams(searchParams);
  };
  const sellingParams = () => {
    searchParams.set('bidtype', 'selling');
    setSearchParams(searchParams);
  };

  const addressModal = () => {
    setOpenAddress(prev => !prev);
  };

  const addressBookModal = () => {
    setOpenBook(prev => !prev);
  };

  useEffect(() => {
    fetch(`${api}/biddingin/32?bidype=${pageMode ? 'buying' : 'selling'}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => setBidData(result));
  }, []);

  return (
    <Content>
      <ProductInfo pageMode={pageMode} bidData={bidData} />

      {!pageMode && <SellAccount pageMode={pageMode} />}

      <AddressInfo
        writeInfo={writeInfo}
        setWriteInfo={setWriteInfo}
        openModal={openModal}
        confirmModal={confirmModal}
        pageMode={pageMode}
        openAddress={openAddress}
        addressModal={addressModal}
        addressBookModal={addressBookModal}
        openBook={openBook}
      />

      {pageMode && <Point pageMode={pageMode} />}

      <FinalOrderInfo
        pageMode={pageMode}
        bidData={bidData}
        currentBtn={currentBtn}
      />

      {pageMode ? <PaymentMethod /> : <CashReceipt />}

      <CheckAgree
        tossPay={tossPay}
        pageMode={pageMode}
        bidData={bidData}
        writeInfo={writeInfo}
        currentBtn={currentBtn}
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
