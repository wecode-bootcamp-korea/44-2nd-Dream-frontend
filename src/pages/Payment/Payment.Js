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
import tossPay from './Toss';

const Payment = () => {
  const [data, setData] = useState({});
  const [writeInfo, setWriteInfo] = useState({ address: '' });
  const { dealNumber, commission, productName, dueDate, bidPrice } = data;

  useEffect(() => {
    fetch('http://localhost:3000/data/payment.json')
      .then(res => res.json())
      .then(result => setData(result));
  }, [dealNumber, productName, bidPrice]);
  // console.log(data.bidPrice);
  const [pageMode, setPageMode] = useState('구매');
  const [openModal, setOpenModal] = useState(false);
  const confirmModal = () => {
    setOpenModal(prev => !prev);
  };
  return (
    <Content>
      <ProductInfo pageMode={pageMode} data={data} />

      {pageMode === '판매' && <SellAccount pageMode={pageMode} />}

      <AddressInfo
        writeInfo={writeInfo}
        setWriteInfo={setWriteInfo}
        openModal={openModal}
        confirmModal={confirmModal}
        pageMode={pageMode}
      />

      {pageMode === '구매' && <Point pageMode={pageMode} />}

      <FinalOrderInfo
        pageMode={pageMode}
        bidPrice={bidPrice}
        commission={commission}
        dueDate={dueDate}
      />

      {pageMode === '구매' ? <PaymentMethod /> : <CashReceipt />}

      <CheckAgree
        tossPay={tossPay}
        pageMode={pageMode}
        bidPrice={bidPrice}
        commission={commission}
        dealNumber={dealNumber}
        productName={productName}
        writeInfo={writeInfo}
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
