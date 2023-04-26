import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AgreePage from './pages/AgreePage/AgreePage';
import BiddingPage from './pages/BiddingPage/BiddingPage';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import InterestProduct from './pages/InterestProduct/InterestProduct';
import Login from './pages/Login/Login';
import Token from './pages/Login/Token';
import Main from './pages/Main/Main';
import SearchModal from './pages/Main/components/SearchModal';
import Payment from './pages/Payment/Payment';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Success from './pages/Payment/Success';
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
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
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
