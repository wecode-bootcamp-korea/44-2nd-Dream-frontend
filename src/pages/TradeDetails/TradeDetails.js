import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SideNav from '../InterestProduct/SideNav/SideNav';
import TradeDetailsList from './TradeDetailsList/TradeDetailsList';

function TradeDetails() {
  const [tradePageMode, setTradePageMode] = useState(true);
  return (
    <FullContainer>
      <SideNav />
      <TradeDetailsContainer>
        <ProductTitle>{tradePageMode ? '구매 내역' : '판매 내역'}</ProductTitle>
        <TableHeader>
          <BiddingPrice>
            {tradePageMode ? '구매 희망가' : '판매 희망가'}
          </BiddingPrice>
          <DeadLineDate>만료일</DeadLineDate>
        </TableHeader>
        <TradeDetailsList />
      </TradeDetailsContainer>
    </FullContainer>
  );
}

const FullContainer = styled.div`
  display: flex;
  width: 1280px;
  padding: 40px 40px 160px;
  margin: 0 auto;
`;

const TradeDetailsContainer = styled.div`
  flex-grow: 1;
  padding-top: 10px;
`;

const ProductTitle = styled.div`
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 3px solid #000000;
  font-size: 25px;
  font-weight: 600;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
`;

const BiddingPrice = styled.div``;

const DeadLineDate = styled.div``;

export default TradeDetails;
