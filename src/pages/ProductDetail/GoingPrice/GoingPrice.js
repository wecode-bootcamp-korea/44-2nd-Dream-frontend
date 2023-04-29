import React, { useState } from 'react';
import styled from 'styled-components';
import MarketGraph from '../MarketGraph/MarketGraph';

function GoingPrice({
  openTradeModal,
  graphChange,
  graphData,
  setGraphData,
  tradeData,
}) {
  const [currentDateId, setCurrentDateId] = useState(1);
  const [currentTradeId, setCurrentTradeId] = useState(1);

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

  function handleDateButton(targetId) {
    setCurrentDateId(targetId);
  }

  function handleTradeButton(targetId) {
    setCurrentTradeId(targetId);
  }

  return (
    <div>
      <Title>시세</Title>
      <DateTabList>
        {DATETAB_DATA.map((data, i) => {
          return (
            <DateTab
              key={data.id}
              currentDateId={currentDateId}
              targetId={data.id}
              onClick={() => {
                handleDateButton(data.id);
                graphChange(data.id);
              }}
            >
              {data.date}
            </DateTab>
          );
        })}
      </DateTabList>
      <MarketGraph graphData={graphData} setGraphData={setGraphData} />
      <TradeTabList>
        {TRADETAB_DATA.map((data, i) => {
          return (
            <TradeTab
              key={data.id}
              currentTradeId={currentTradeId}
              targetId={data.id}
              onClick={() => {
                handleTradeButton(data.id);
              }}
            >
              {data.trade}
            </TradeTab>
          );
        })}
      </TradeTabList>
      <TradeHeader>
        <TradeSize>{TRADE_HEADER[currentTradeId][0]?.title}</TradeSize>
        <TradePrice>{TRADE_HEADER[currentTradeId][1]?.title}</TradePrice>
        <TradeDate>{TRADE_HEADER[currentTradeId][2]?.title}</TradeDate>
      </TradeHeader>
      <BreakDownTable>
        {tradeData[BREAK_DOWN[currentTradeId]]?.map(data => {
          return (
            <BreakDown key={data.id}>
              <TradeSizeValue>ONE SIZE</TradeSizeValue>
              <TradePriceValue>
                {Number(data.bidPrice).toLocaleString() + '원'}
              </TradePriceValue>
              <TradeDateValue>
                {currentTradeId === 1 ? data.dates : data.quantity}
              </TradeDateValue>
            </BreakDown>
          );
        })}
      </BreakDownTable>
      <SeeMore
        onClick={() => {
          openTradeModal();
        }}
      >
        체결 내역 더보기
      </SeeMore>
    </div>
  );
}

const Title = styled.div`
  font-size: 18px;
  margin-top: 55px;
  margin-bottom: 25px;
`;

const DateTabList = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 560px;
  height: 36px;
  border-radius: 10px;
  background-color: #f4f4f4;
`;

const DateTab = styled.li`
  flex: 1;
  padding-top: 9px;
  padding-bottom: 8px;
  border-radius: 10px;
  margin: 0 3px;
  background-color: ${({ currentDateId, targetId }) =>
    currentDateId === targetId ? '#ffffff' : '#f4f4f4'};
  font-weight: ${({ currentDateId, targetId }) =>
    currentDateId === targetId ? 700 : 400};
  font-size: 13px;
  color: rgba(34, 34, 34, 0.8);
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
const TradeTabList = styled(DateTabList)`
  margin-top: 30px;
`;

const TradeTab = styled(DateTab)`
  background-color: ${({ currentTradeId, targetId }) =>
    currentTradeId === targetId ? '#ffffff' : '#f4f4f4'};
  font-weight: ${({ currentTradeId, targetId }) =>
    currentTradeId === targetId ? 700 : 400};
`;

const TradeHeader = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ebebeb;
  font-size: 18px;
`;

const TradeSize = styled.div`
  flex: 1;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`;

const TradePrice = styled(TradeSize)`
  text-align: right;
`;

const TradeDate = styled(TradePrice)``;

const BreakDownTable = styled.div`
  height: 195px;
  overflow-y: hidden;
`;

const BreakDown = styled.div`
  display: flex;
  padding-top: 15px;
`;

const TradeSizeValue = styled.div`
  flex: 1;
  font-size: 15px;
  font-weight: 600;
  color: #222222;
`;

const TradePriceValue = styled(TradeSizeValue)`
  font-weight: 400;
  text-align: right;
`;

const TradeDateValue = styled(TradePriceValue)``;

const SeeMore = styled.div`
  width: 100%;
  height: 42px;
  margin-top: 10px;
  margin-bottom: 40px;
  padding: 0 18px;
  padding-top: 12px;
  border: 1px solid #d3d3d3;
  border-radius: 12px;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.8);
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export default GoingPrice;

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
  { id: 1, title: '구매 희망가' },
  { id: 1, title: '수량' },
];

const DATETAB_DATA = [
  { id: 1, date: '전체' },
  { id: 2, date: '1년' },
  { id: 3, date: '6개월' },
  { id: 4, date: '3개월' },
  { id: 5, date: '1개월' },
];

const TRADETAB_DATA = [
  { id: 1, trade: '체결 거래' },
  { id: 2, trade: '판매 입찰' },
  { id: 3, trade: '구매 입찰' },
];
