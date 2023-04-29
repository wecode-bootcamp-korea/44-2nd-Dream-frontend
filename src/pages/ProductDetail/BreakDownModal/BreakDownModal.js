import React, { useState } from 'react';
import styled from 'styled-components';

function BreakDownModal({ closeTradeModal, tradeData }) {
  const [changeSort, setChangeSort] = useState(true);
  const [currentId, setCurrentId] = useState(1);

  const BREAK_DOWN = {
    1: 'deal',
    2: 'selling',
    3: 'buying',
  };

  const TRADE_HEADER = {
    1: SIGN_HEADER,
    2: SELL_HEADER,
    3: PURCHASE_HEADER,
  };

  function handleTradeBtn(targetId) {
    setCurrentId(targetId);
  }

  function SortToggle() {
    setChangeSort(prev => !prev);
  }

  function handelPriceSort() {
    BREAK_DOWN[currentId].sort((a, b) => {
      if (changeSort) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  function handelDateSort() {
    BREAK_DOWN[currentId].sort((a, b) => {
      const [day1, month1, year1] = a.value.split('/');
      const [day2, month2, year2] = b.value.split('/');

      const date1 = new Date(`20${year1}`, month1 - 1, day1);
      const date2 = new Date(`20${year2}`, month2 - 1, day2);

      const timestamp1 = date1.getTime();
      const timestamp2 = date2.getTime();

      if (changeSort) {
        return timestamp1 - timestamp2;
      } else {
        return timestamp2 - timestamp1;
      }
    });
  }

  return (
    <ModalContainer>
      <Title>시세</Title>
      <CloseBtn
        onClick={() => {
          closeTradeModal();
        }}
      >
        ✕
      </CloseBtn>
      <ModalHeader>
        <HeaderImg />
        <HeaderContent>
          <EnglishName>Lego Harry Potter Hogwarts Great Hall</EnglishName>
          <KoreanName>레고 해리포터 호그와트 그레이트 홀</KoreanName>
          <ProductSize>ONE SIZE</ProductSize>
        </HeaderContent>
      </ModalHeader>
      <TradeTabList>
        {TRADETAB_DATA.map(data => {
          return (
            <TradeTab
              key={data.id}
              currentId={currentId}
              targetId={data.id}
              onClick={() => {
                handleTradeBtn(data.id);
              }}
            >
              {data.trade}
            </TradeTab>
          );
        })}
      </TradeTabList>
      <ModalContent>
        <ContentHeader>
          <Size>
            <SizeContent>{TRADE_HEADER[currentId][0]?.title}</SizeContent>
            <ArrowContainer />
          </Size>
          <TradePrice>
            <TradePriceContent>
              {TRADE_HEADER[currentId][1]?.title}
            </TradePriceContent>
            <ArrowContainer
              onClick={() => {
                SortToggle();
                handelPriceSort();
              }}
            >
              <TopArrow>↑</TopArrow>
              <BottomArrow>↓</BottomArrow>
            </ArrowContainer>
          </TradePrice>
          <TradeDate>
            <TradeDateContent>
              {TRADE_HEADER[currentId][2]?.title}
            </TradeDateContent>
            {TRADE_HEADER[currentId][2]?.title === '거래일' && (
              <ArrowContainer
                onClick={() => {
                  SortToggle();
                  handelDateSort();
                }}
              >
                <TopArrow>↑</TopArrow>
                <BottomArrow>↓</BottomArrow>
              </ArrowContainer>
            )}
          </TradeDate>
        </ContentHeader>
        <BreakDownContainer>
          {tradeData[BREAK_DOWN[currentId]]?.map(data => {
            return (
              <BreakDown key={data.id}>
                <TradeSizeValue>ONE SIZE</TradeSizeValue>
                <TradePriceValue>
                  {Number(data.bidPrice).toLocaleString() + '원'}
                </TradePriceValue>
                <TradeDateValue>
                  {currentId === 1 ? data.dates : data.quantity}
                </TradeDateValue>
              </BreakDown>
            );
          })}
        </BreakDownContainer>
      </ModalContent>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 480px;
  height: 540px;
  padding: 32px 0 32px 32px;
  border-radius: 16px;
  background-color: #ffffff;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  z-index: 3;
`;

const Title = styled.div`
  background-color: #ffffff;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  text-align: center;
  background-color: #ffffff;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 25px;
  color: rgba(34, 34, 34, 0.7);
  &:hover {
    cursor: pointer;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const HeaderImg = styled.div`
  width: 80px;
  height: 80px;
  background-image: url('https://images.unsplash.com/photo-1505322033502-1f4385692e6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80');
  background-size: cover;
  border-radius: 13px;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const EnglishName = styled.div`
  font-size: 15px;
`;
const KoreanName = styled.div`
  line-height: 14px;
  margin-top: 6px;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`;

const ProductSize = styled.div`
  padding-top: 10px;
  margin-top: 5px;
  width: 90px;
  height: 35px;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  background-color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  color: rgba(34, 34, 34, 0.8);
  text-align: center;
`;

const TradeTabList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 20px;
  width: 416px;
  height: 32px;
  border-radius: 10px;
  background-color: #f4f4f4;
`;

const TradeTab = styled.li`
  flex: 1;
  padding-top: 7px;
  padding-bottom: 6px;
  border-radius: 8px;
  margin: 0 3px;
  background-color: ${({ currentId, targetId }) =>
    currentId === targetId ? '#ffffff' : '#f4f4f4'};
  font-weight: ${({ currentId, targetId }) =>
    currentId === targetId ? 700 : 400};
  font-size: 13px;
  color: rgba(34, 34, 34, 0.8);
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const ModalContent = styled.div``;

const ContentHeader = styled.div`
  display: flex;
  padding: 10px 0;
  padding-right: 45px;
  border-bottom: 1px solid #ebebeb;
  font-size: 18px;
`;

const Size = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 2px;
`;
const SizeContent = styled.div`
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`;

const ArrowContainer = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;
const TopArrow = styled.div`
  font-size: 15px;
  color: rgba(34, 34, 34, 0.5);
`;
const BottomArrow = styled(TopArrow)``;

const TradePrice = styled(Size)`
  justify-content: flex-end;
`;

const TradePriceContent = styled(SizeContent)`
  &:hover {
    cursor: pointer;
  }
`;

const TradeDate = styled(TradePrice)``;

const TradeDateContent = styled(TradePriceContent)``;

const BreakDownContainer = styled.div`
  height: 240px;
  overflow-y: scroll;
  padding-right: 30px;
`;

const BreakDown = styled.div`
  display: flex;
  padding-top: 15px;
`;

const TradeSizeValue = styled.div`
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: #222222;
`;

const TradePriceValue = styled(TradeSizeValue)`
  font-weight: 400;
  text-align: right;
`;

const TradeDateValue = styled(TradePriceValue)``;

export default BreakDownModal;

const TRADETAB_DATA = [
  { id: 1, trade: '체결 거래' },
  { id: 2, trade: '판매 입찰' },
  { id: 3, trade: '구매 입찰' },
];

const SIGN_HEADER = [
  { id: 1, title: '사이즈' },
  { id: 2, title: '거래가' },
  { id: 3, title: '거래일' },
];

const SELL_HEADER = [
  { id: 1, title: '사이즈' },
  { id: 2, title: '판매 희망가' },
  { id: 3, title: '수량' },
];

const PURCHASE_HEADER = [
  { id: 1, title: '사이즈' },
  { id: 2, title: '구매 희망가' },
  { id: 3, title: '수량' },
];
