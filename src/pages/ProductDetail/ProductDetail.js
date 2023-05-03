import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../api';
import styled from 'styled-components';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductImage from './ProductImage/ProductImage';
import ScrollModal from './ScrollModal/ScrollModal';
import PhotoReview from './PhotoReview/PhotoReview';
import BreakDownModal from './BreakDownModal/BreakDownModal';
import useFetch from '../../hooks/useFetch';
import Footer from '../../components/Footer/Footer';

function ProductDetail({
  setPageMode,
  // detailData,
  // setDetailData,
  file,
  textAreaValue,
  setFile,
  setTextAreaValue,
  handleLike,
}) {
  const [detailData, setDetailData] = useState([]);
  const [scrollModal, setScrollModal] = useState(false);
  const [tradeModalWindow, setTradeModalWindow] = useState(false);
  const [reviewModalWindow, setReviewModalWindow] = useState(false);
  // const [graphData, setGraphData] = useState(1);
  const navigate = useNavigate();
  const fixed = useRef();
  const params = useParams();
  const paramsId = params.id;
  const [tradeData] = useFetch(`${api.trade}${paramsId}`);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${api.productDetail}${paramsId}`)
      .then(response => response.json())
      .then(result => setDetailData(result));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    handleScrollModal();
    handleFixed();
  };

  function handleScrollModal() {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 360) {
      setScrollModal(true);
    } else if (scrollTop < 360) {
      setScrollModal(false);
    }
  }

  function handleFixed() {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 1540) {
      fixed.current.style.position = 'absolute';
      fixed.current.style.top = '1555px';
    } else if (scrollTop < 1540) {
      fixed.current.style.top = '';
      fixed.current.style.position = 'fixed';
    }
  }

  function openTradeModal() {
    setTradeModalWindow(true);
    window.document.body.style.overflowY = 'hidden';
  }

  function closeTradeModal() {
    setTradeModalWindow(false);
    window.document.body.style.overflowY = 'scroll';
  }

  function openReviewModal() {
    setReviewModalWindow(true);
    window.document.body.style.overflowY = 'hidden';
  }

  function closeReviewModal() {
    setReviewModalWindow(false);
    window.document.body.style.overflowY = 'scroll';
  }

  function goToPurchase(targetId) {
    setPageMode(true);
    navigate(`/agree/${targetId}`);
    window.scrollTo(0, 0);
  }

  function goToSales(targetId) {
    setPageMode(false);
    navigate(`/agree/${targetId}`);
    window.scrollTo(0, 0);
  }

  function reviewSubmit() {
    const formData = new FormData();
    formData.append('productId', detailData.productId);
    formData.append('reviewImg', file);
    formData.append('title', 'review');
    formData.append('content', textAreaValue);
    fetch('http://10.58.52.75:3000/reviews', {
      headers: {
        Accpet: 'application/json',
        Authorization: token,
      },
      method: 'POST',
      cache: 'no-cache',
      body: formData,
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      });
  }

  return (
    <>
      <FullContainer>
        {scrollModal && (
          <ScrollModal
            detailData={detailData}
            goToPurchase={goToPurchase}
            goToSales={goToSales}
          />
        )}
        {tradeModalWindow && (
          <BreakDownModal
            closeTradeModal={closeTradeModal}
            tradeData={tradeData}
          />
        )}
        {(tradeModalWindow || reviewModalWindow) && (
          <BlackModal
            onClick={() => {
              closeTradeModal();
              closeReviewModal();
            }}
          />
        )}
        <ProductArea>
          <ProductImage fixed={fixed} detailData={detailData} />
          <ProductInfo
            detailData={detailData}
            openTradeModal={openTradeModal}
            // graphData={graphData}
            // setGraphData={setGraphData}
            setPageMode={setPageMode}
            tradeData={tradeData}
            handleLike={handleLike}
            paramsId={paramsId}
            goToPurchase={goToPurchase}
            goToSales={goToSales}
          />
        </ProductArea>
        <HorizontalLine />
        <PhotoReview
          reviewModalWindow={reviewModalWindow}
          openReviewModal={openReviewModal}
          closeReviewModal={closeReviewModal}
          file={file}
          textAreaValue={textAreaValue}
          setFile={setFile}
          setTextAreaValue={setTextAreaValue}
          reviewSubmit={reviewSubmit}
          detailData={detailData}
        />
      </FullContainer>
      <Footer />
    </>
  );
}

const FullContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 30px;
`;

const BlackModal = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const ProductArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HorizontalLine = styled.hr`
  width: 1200px;
  border: none;
  border-top: 1px solid #f0f0f0;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export default ProductDetail;
