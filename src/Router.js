import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AgreePage from './pages/AgreePage/AgreePage';
import BiddingPage from './pages/BiddingPage/BiddingPage';
import Nav from './components/Nav/Nav';
import InterestProduct from './pages/InterestProduct/InterestProduct';
import Login from './pages/Login/Login';
import Token from './pages/Login/Token';
import Main from './pages/Main/Main';
import SearchModal from '../src/components/Nav/SearchModal';
import Payment from './pages/Payment/Payment';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Success from './pages/Payment/Success';
import TradeDetails from './pages/TradeDetails/TradeDetails';

const Router = () => {
  const [pageMode, setPageMode] = useState(true);
  const [detailData, setDetailData] = useState({});
  const [file, setFile] = useState(null);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [currentBtn, setCurrentBtn] = useState(2);
  const [interestData, setInterestData] = useState([]);
  const [bidValue, setBidValue] = useState('');
  const today = new Date();
  const thirtyDaysLater = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  const [deadLineDate, setDeadLineDate] = useState(thirtyDaysLater);
  const [bidData, setBidData] = useState({});

  function reviewSubmit() {
    const formData = new FormData();
    formData.append('productId', detailData.productId);
    formData.append('reviewImg', file);
    formData.append('title', 'review');
    formData.append('content', textAreaValue);
    fetch('http://10.58.52.75:3000/review', {
      method: 'POST',
      cache: 'no-cache',
      body: formData,
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      });
  }

  function handleLike() {
    fetch('http://10.58.52.75:3000/like/27', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: 51 }),
    }).then(response => {
      rerendering();
    });
  }

  useEffect(() => {
    fetch('http://10.58.52.75:3000/products/like')
      .then(response => response.json())
      .then(result => {
        setInterestData(result);
      });
  }, []);

  function rerendering() {
    fetch('http://10.58.52.75:3000/products/like')
      .then(response => response.json())
      .then(result => {
        setInterestData(result);
      });
  }

  function bidSubmit() {
    fetch('http://10.58.52.174:3000/bid/input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        productId: detailData.productId,
        bidPrice:
          currentBtn === 1
            ? parseFloat(bidValue.replace(/,/g, ''))
            : pageMode
            ? detailData.buyNowPrice
            : detailData.sellNowPrice,
        dueDate: formattedDate,
        bidType: pageMode ? 'buying' : 'selling',
      }),
    })
      .then(response => response.json())
      .then(result => setBidData(result));
  }

  const dateType = {
    1: new Date(today.getTime() + 24 * 60 * 60 * 1000),
    2: new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000),
    3: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000),
    4: new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000),
    5: new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000),
  };

  function handleDate(targetId) {
    setDeadLineDate(dateType[targetId]);
  }

  const year = deadLineDate.getFullYear();
  const month = String(deadLineDate.getMonth() + 1).padStart(2, '0');
  const day = String(deadLineDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}/${month}/${day}`;

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dream/kakao" element={<Token />} />
        <Route path="/" element={<Main />} />
        <Route path="/modal" element={<SearchModal />} />
        <Route
          path="/detail/:id"
          element={
            <ProductDetail
              setPageMode={setPageMode}
              detailData={detailData}
              setDetailData={setDetailData}
              file={file}
              setFile={setFile}
              textAreaValu={textAreaValue}
              setTextAreaValue={setTextAreaValue}
              reviewSubmit={reviewSubmit}
              handleLike={handleLike}
            />
          }
        />
        <Route
          path="/interestProduct"
          element={
            <InterestProduct
              handleLike={handleLike}
              interestData={interestData}
            />
          }
        />
        <Route path="/tradeDetails" element={<TradeDetails />} />
        <Route
          path="/payment"
          element={
            <Payment
              pageMode={pageMode}
              currentBtn={currentBtn}
              bidData={bidData}
            />
          }
        />
        <Route
          path="/success"
          element={
            <Success
              pageMode={pageMode}
              currentBtn={currentBtn}
              bidData={bidData}
            />
          }
        />

        <Route
          path="/agree"
          element={<AgreePage pageMode={pageMode} detailData={detailData} />}
        />
        <Route
          path="/bidding"
          element={
            <BiddingPage
              pageMode={pageMode}
              detailData={detailData}
              currentBtn={currentBtn}
              setCurrentBtn={setCurrentBtn}
              bidSubmit={bidSubmit}
              handleDate={handleDate}
              bidValue={bidValue}
              setBidValue={setBidValue}
              formattedDate={formattedDate}
            />
          }
        />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/interestProduct" element={<InterestProduct />} />
        <Route path="/agree" element={<AgreePage />} />
        <Route path="/bidding" element={<BiddingPage />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="/purchaseBid" element={<PurchaseBid />} /> */}
        {/* <Route path="/payment" element={<Payment />} /> */}
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
