import React from 'react';
import styled from 'styled-components';
import { BsBookmarkHeart } from 'react-icons/bs';

function ScrollModal() {
  return (
    <EntireArea>
      <FlexArea>
        <FlexStart>
          <ItemImage />
          <ProductName>
            <EnglishName>Lego Harry Potter Hogwarts Great Hall</EnglishName>
            <KoreanName>레고 해리포터 호그와트 그레이트 홀</KoreanName>
          </ProductName>
        </FlexStart>
        <FlexEnd>
          <Interest>
            <InterestIcon />
            <InterestNum>138</InterestNum>
          </Interest>
          <PurchaseButton>
            <Purchase>구매</Purchase>
            <div>
              <PurchasePrice>189,000원</PurchasePrice>
              <ImmediatePurchase>즉시 구매가</ImmediatePurchase>
            </div>
          </PurchaseButton>
          <SellButton>
            <Sell>판매</Sell>
            <div>
              <SellPrice>189,000원</SellPrice>
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
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 79px;
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
  background-image: url('https://images.unsplash.com/photo-1505322033502-1f4385692e6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80');
  background-size: cover;
  border-radius: 13px;
  width: 64px;
  height: 64px;
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
