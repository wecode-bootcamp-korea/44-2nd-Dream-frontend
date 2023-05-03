import React from 'react';
import styled from 'styled-components';
import { BsBookmarkHeart } from 'react-icons/bs';

function ScrollModal({ detailData, goToPurchase, goToSales }) {
  return (
    <EntireArea>
      <FlexArea>
        <FlexStart>
          <ItemImage itemImg={detailData.imageUrl} />
          <ProductName>
            <EnglishName>The Lego Group All rights</EnglishName>
            <KoreanName>{detailData.productName}</KoreanName>
          </ProductName>
        </FlexStart>
        <FlexEnd>
          <Interest>
            <InterestIcon />
            <InterestNum>
              {detailData.likeCount === null ? 0 : detailData.likeCount}
            </InterestNum>
          </Interest>
          <PurchaseButton onClick={goToPurchase}>
            <Purchase>구매</Purchase>
            <div>
              <PurchasePrice>
                {detailData.buyNowPrice?.toLocaleString() + '원'}
              </PurchasePrice>
              <ImmediatePurchase>즉시 구매가</ImmediatePurchase>
            </div>
          </PurchaseButton>
          <SellButton onClick={goToSales}>
            <Sell>판매</Sell>
            <div>
              <SellPrice>
                {detailData.sellNowPrice?.toLocaleString() + '원'}
              </SellPrice>
              <ImmediateSell>즉시 판매가</ImmediateSell>
            </div>
          </SellButton>
        </FlexEnd>
      </FlexArea>
    </EntireArea>
  );
}

const EntireArea = styled.div`
  position: fixed;
  top: 116px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 95px;
  z-index: 1;
  background-color: #ffffff;
  box-shadow: 4px 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const FlexArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  width: 1280px;
`;

const FlexStart = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const ItemImage = styled.img`
  background-image: ${({ itemImg }) => `url(${itemImg})`};
  background-position: center;
  background-size: cover;
  width: 65px;
  height: 65px;
`;

const ProductName = styled.div``;

const EnglishName = styled.div`
  font-size: 15px;
`;
const KoreanName = styled.div`
  line-height: 14px;
  margin-top: 6px;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`;

const FlexEnd = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PurchaseButton = styled.div`
  display: flex;
  gap: 20px;
  width: 192px;
  height: 50px;
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
  font-size: 15px;
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
  width: 160px;
  height: 50px;
  border: 1px solid #ebebeb;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const InterestIcon = styled(BsBookmarkHeart)`
  font-size: 20px;
`;

const InterestNum = styled.div`
  padding-top: 3px;
  font-size: 15px;
  font-weight: 600;
`;

export default ScrollModal;
