import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductImage from './ProductImage/ProductImage';
import ScrollModal from './ScrollModal/ScrollModal';
import PhotoReview from './PhotoReview/PhotoReview';
import BreakDownModal from './BreakDownModal/BreakDownModal';
import useFetch from '../../hooks/useFetch';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { api } from '../../api';

function ProductDetail({
  setPageMode,
  detailData,
  setDetailData,
  file,
  textAreaValue,
  setFile,
  setTextAreaValue,
  reviewSubmit,
  handleLike,
}) {
  const [scrollModal, setScrollModal] = useState(false);
  const [tradeModalWindow, setTradeModalWindow] = useState(false);
  const [reviewModalWindow, setReviewModalWindow] = useState(false);
  const [graphData, setGraphData] = useState(1);
  const fixed = useRef();
  const [tradeData] = useFetch('http://10.58.52.75:3000/bid/info/24');

  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    fetch(`${api.productDetail}${productId}`)
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

  function graphChange(targetId) {
    setGraphData(targetId);
  }

  return (
    <>
      <FullContainer>
        {scrollModal && <ScrollModal detailData={detailData} />}
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
            graphChange={graphChange}
            graphData={graphData}
            setGraphData={setGraphData}
            setPageMode={setPageMode}
            tradeData={tradeData}
            handleLike={handleLike}
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
