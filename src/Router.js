import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AgreePage from './pages/AgreePage/AgreePage';
import BiddingPage from './pages/BiddingPage/BiddingPage';
import Nav from './components/Nav/Nav';
import InterestProduct from './pages/InterestProduct/InterestProduct';
import Login from './pages/Login/Login';
import Token from './pages/Login/Token';
import Main from './pages/Main/Main';
import Payment from './pages/Payment/Payment';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Success from './pages/Payment/Success';
import TradeDetails from './pages/TradeDetails/TradeDetails';
import { api } from './api';
import PointQuiz from './pages/PointQuiz/PointQuiz';

const Router = () => {
  const [pageMode, setPageMode] = useState(true);

  const [file, setFile] = useState(null);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [currentBtn, setCurrentBtn] = useState(2);
  const [interestData, setInterestData] = useState([]);

  const token = localStorage.getItem('token');
  function handleLike(targetId) {
    fetch(`http://10.58.52.75:3000/like/${targetId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    }).then(() => rerendering());
  }

  function rerendering() {
    fetch(`${api.interest}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => {
        setInterestData(result);
      });
  }

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dream/kakao" element={<Token />} />
        <Route path="/" element={<Main />} />
        <Route
          path="/detail/:id"
          element={
            <ProductDetail
              setPageMode={setPageMode}
              file={file}
              setFile={setFile}
              textAreaValue={textAreaValue}
              setTextAreaValue={setTextAreaValue}
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
              setInterestData={setInterestData}
            />
          }
        />
        <Route path="/tradeDetails" element={<TradeDetails />} />
        <Route path="/event" element={<PointQuiz />} />
        <Route
          path="/payment/:id"
          element={<Payment pageMode={pageMode} currentBtn={currentBtn} />}
        />
        <Route
          path="/success"
          element={<Success pageMode={pageMode} currentBtn={currentBtn} />}
        />

        <Route path="/agree/:id" element={<AgreePage pageMode={pageMode} />} />
        <Route
          path="/bidding/:id"
          element={
            <BiddingPage
              pageMode={pageMode}
              currentBtn={currentBtn}
              setCurrentBtn={setCurrentBtn}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
