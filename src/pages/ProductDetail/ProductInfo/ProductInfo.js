import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsBookmarkHeart } from 'react-icons/bs';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import ProductData from '../ProductData/ProductData';
import SippingInfo from '../ShippingInfo/ShippingInfo';
import BeforeCheck from '../BeforeCheck/BeforeCheck';
import Guarantee from '../Guarantee/Guarantee';
import GoingPrice from '../GoingPrice/GoingPrice';

function ProductInfo({
  openTradeModal,
  graphChange,
  graphData,
  setGraphData,
  detailData,
  setPageMode,
  tradeData,
  handleLike,
}) {
  const [interestBtn, setInterestBtn] = useState(false);
  const navigate = useNavigate();

  function goToPurchase() {
    setPageMode(true);
    navigate('/agree');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goToSales() {
    setPageMode(false);
    navigate('/agree');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleInterestToggle() {
    setInterestBtn(prev => !prev);
  }

  // function pushLike() {
  //   fetch('http://10.58.52.75:3000/like/27', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ userId: 51 }),
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log(result));
  // }

  return (
    <InfoArea>
      <BrandName>DREAM</BrandName>
      <EnglishName>The Lego Group All rights</EnglishName>
      <KoreanName>{detailData.productName}</KoreanName>
      <SizeArea>
        <SizeTitle>사이즈</SizeTitle>
        <SizeName>ONE SIZE</SizeName>
      </SizeArea>
      <PriceArea>
        <PriceTitle>최근 거래가</PriceTitle>
        <div>
          <RecentPrice>
            {detailData.recentDealPrice === null
              ? '- 원'
              : `${Number(detailData.recentDealPrice)?.toLocaleString()}원`}
          </RecentPrice>
          <RateOfReturn
            textColor={
              detailData.recentDealPrice - detailData.originalPrice > 0
            }
          >
            {detailData.recentDealPrice === null
              ? null
              : `${
                  detailData.recentDealPrice - detailData.originalPrice > 0
                    ? '▲'
                    : '▼'
                } ${(
                  detailData.recentDealPrice - detailData.originalPrice
                )?.toLocaleString()}원 (${detailData.premiumPercent}%)`}
          </RateOfReturn>
        </div>
      </PriceArea>
      <ButtonArea>
        <PurchaseButton onClick={goToPurchase}>
          <Purchase>구매</Purchase>
          <div>
            <PurchasePrice>
              {detailData.buyNowPrice === null
                ? '-'
                : `${Number(detailData.buyNowPrice)?.toLocaleString()}원`}
            </PurchasePrice>
            <ImmediatePurchase>즉시 구매가</ImmediatePurchase>
          </div>
        </PurchaseButton>
        <SellButton onClick={goToSales}>
          <Sell>판매</Sell>
          <div>
            <SellPrice>{`${Number(
              detailData.sellNowPrice
            )?.toLocaleString()}원`}</SellPrice>
            <ImmediateSell>즉시 판매가</ImmediateSell>
          </div>
        </SellButton>
      </ButtonArea>
      <Interest
        onClick={() => {
          handleInterestToggle();
          handleLike();
        }}
      >
        {interestBtn ? <FullInterestIcon /> : <EmptyInterestIcon />}
        <InterestItem>관심 상품</InterestItem>
        <InterestNum>
          {interestBtn
            ? Number(detailData.likeCount) + 1
            : detailData.likeCount}
        </InterestNum>
      </Interest>
      <ProductData detailData={detailData} />
      <SippingInfo />
      <GoingPrice
        openTradeModal={openTradeModal}
        graphChange={graphChange}
        graphData={graphData}
        setGraphData={setGraphData}
        tradeData={tradeData}
      />
      <BeforeCheck />
      <Guarantee />
    </InfoArea>
  );
}
const InfoArea = styled.div`
  position: relative;
  left: 300px;
  width: 610px;
  padding-left: 50px;
  border-left: 1px solid #ebebeb;
`;

const BrandName = styled.div`
  display: inline-block;
  vertical-align: top;
  padding-top: 1px;
  margin-bottom: 12px;
  font-size: 18px;
  letter-spacing: -0.27px;
  font-weight: 800;
  border-bottom: 2px solid #222;
`;

const EnglishName = styled.div`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 400;
`;

const KoreanName = styled.div`
  line-height: 17px;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.5);
`;

const SizeArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-top: 19px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ebebeb;
`;

const SizeTitle = styled.div`
  line-height: 16px;
  font-size: 13px;
  color: rgba(34, 34, 34, 0.8);
`;

const SizeName = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

const PriceArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;
`;

const PriceTitle = styled.div`
  font-size: 12px;
  color: rgba(34, 34, 34, 0.8);
`;

const RecentPrice = styled.div`
  margin-bottom: 7px;
  font-size: 20px;
  font-weight: 700;
  text-align: right;
`;

const RateOfReturn = styled.div`
  font-size: 13px;
  color: ${({ textColor }) => (textColor ? '#f15746' : '#41b979')};
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const PurchaseButton = styled.div`
  display: flex;
  gap: 20px;
  width: 275px;
  height: 60px;
  background-color: #ee6153;
  border: none;
  border-radius: 10px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Purchase = styled.div`
  font-size: 18px;
  padding: 21px 15px;
  border-right: 1px solid #dc5c4d;
`;

const PurchasePrice = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const ImmediatePurchase = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: hsla(0, 0%, 100%, 0.8);
`;

const SellButton = styled(PurchaseButton)`
  background-color: #41b979;
`;

const Sell = styled(Purchase)`
  border-right: 1px solid #3dab72;
`;

const SellPrice = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const ImmediateSell = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: hsla(0, 0%, 100%, 0.8);
`;

const Interest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 560px;
  height: 60px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 50px;

  &:hover {
    cursor: pointer;
  }
`;

const EmptyInterestIcon = styled(BsBookmarkHeart)`
  font-size: 20px;
`;
const FullInterestIcon = styled(BsBookmarkHeartFill)`
  font-size: 20px;
`;

const InterestItem = styled.div`
  padding-top: 3px;
  font-size: 15px;
`;

const InterestNum = styled.div`
  padding-top: 3px;
  font-size: 15px;
  font-weight: 600;
`;

export default ProductInfo;
