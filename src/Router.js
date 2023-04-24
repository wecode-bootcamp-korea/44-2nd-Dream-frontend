import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AgreePage from './pages/AgreePage/AgreePage';
import BiddingPage from './pages/BiddingPage/BiddingPage';
import InterestProduct from './pages/InterestProduct/InterestProduct';
import Login from './pages/Login/Login';
import Token from './pages/Login/Token';
import Main from './pages/Main/Main';
import Payment from './pages/Payment/Payment.js';
import SearchModal from './pages/Main/components/SearchModal';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dream/kakao" element={<Token />} />
        <Route path="/" element={<Main />} />
        <Route path="/modal" element={<SearchModal />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/interestProduct" element={<InterestProduct />} />
        <Route path="/agree" element={<AgreePage />} />
        <Route path="/bidding" element={<BiddingPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
