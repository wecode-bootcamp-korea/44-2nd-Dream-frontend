import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Success = ({ pageMode, currentBtn, address, bidData }) => {
  const [success, setSuccess] = useState({});
  const { productImage, totalAmount } = success;

  useEffect(() => {
    fetch('http://10.58.52.75:3000/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(
        pageMode
          ? {
              dealNumber: 'd6155182-e589-11ed-9b10-c7d0bb38e7df',
              address: address,
              biddingId: 1,
            }
          : {
              dealNumber: 'd6155182-e589-11ed-9b10-c7d0bb38e7df',
              계좌번호: 3504042,
            }
      ),
    })
      .then(res => res.json())
      .then(req => setSuccess(req));
  }, []);

  return (
    <SuccessContainer>
      <SuccessWrap>
        <ImageWrap>
          <Image productImage={productImage} />
        </ImageWrap>
        <CompleteWrap>
          <CompleteTitle>
            {pageMode
              ? currentBtn === 1
                ? '구매 입찰이 완료되었습니다.'
                : '즉시 구매가 완료되었습니다.'
              : currentBtn === 1
              ? '판매 입찰이 완료되었습니다.'
              : '즉시 판매가 완료되었습니다.'}
          </CompleteTitle>
          <CompleteWhen>
            {pageMode ? (
              <p>
                결제는 거래가 성사되는 시점에 <br /> 등록하신 결제 정보로 자동
                처리됩니다.
              </p>
            ) : (
              <p>
                결제가 체결되고 상품이 검수에 합격 한 후,
                <br />
                등록한 계좌로 정산이 진행됩니다.
              </p>
            )}
          </CompleteWhen>

          <CompleteDetailBtn>
            {pageMode ? '구매' : '판매'} 내역 상세보기
          </CompleteDetailBtn>

          <PurchaseErase>
            구매내역 {'>'} 입찰 중' 상태일 때는 입찰 지우기가 가능합니다
          </PurchaseErase>
        </CompleteWrap>
        <TotalPriceBox>
          <TotalPriceName>총 {pageMode ? '결제' : '정산'} 금액</TotalPriceName>
          <TotalPrice pageMode={pageMode}>
            {totalAmount?.toLocaleString()}원
          </TotalPrice>
        </TotalPriceBox>
        <HopePriceWrap>
          <HopePriceBox>
            <HopePriceName pageMode={pageMode}>
              {pageMode ? '구매' : '판매'} 희망가
            </HopePriceName>
            <HopePrice>{totalAmount?.toLocaleString()}원</HopePrice>
          </HopePriceBox>
          <BidPriceWrap>
            <BidPriceName pageMode={pageMode}>검수비</BidPriceName>
            <BidPrice pageMode={pageMode}>무료</BidPrice>
          </BidPriceWrap>
          {!pageMode && (
            <SellCommissionWrap>
              <SellCommissionName>판매 수수료</SellCommissionName>
              <SellCommission>무료 이벤트 </SellCommission>
            </SellCommissionWrap>
          )}
          <DelieveryFeeWrap>
            <DeliveryFeeName>배송비</DeliveryFeeName>
            <DelieveryFee pageMode={pageMode}>
              {pageMode ? '무료 이벤트' : '선불 ・ 판매자 부담'}
            </DelieveryFee>
          </DelieveryFeeWrap>
          <>
            {currentBtn === 1 && <Border />}
            {currentBtn === 1 && (
              <BidDeadlineWrap>
                <BidDeadlineName>입찰 마감 기한</BidDeadlineName>
                <BidDeadlineDate>{bidData.dueDate}까지</BidDeadlineDate>
              </BidDeadlineWrap>
            )}
          </>
        </HopePriceWrap>
      </SuccessWrap>
    </SuccessContainer>
  );
};

const SuccessContainer = styled.div`
  position: relative;
  display: flex;
  padding-top: 50px;
  padding-bottom: 160px;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 160px;
  background-color: #fafafa;
  box-shadow: 4px 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const SuccessWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: #ffffff;
  box-shadow: 4px 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const ImageWrap = styled.div`
  height: 200px;
  background-color: #fafafa;
`;

const Image = styled.div`
  height: 200px;
  background-color: #ffffff;
  background-image: url(${props => props.productImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CompleteWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CompleteTitle = styled.h2`
  margin-top: 50px;
  font-weight: 500;
  font-size: 28px;
`;

const CompleteWhen = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  line-height: 1.5;
  font-size: 19px;
  text-align: center;
`;

const CompleteDetailBtn = styled.button`
  margin-top: 40px;
  border: 1px solid #9c9c9c;
  background-color: #ffffff;
  border-radius: 12px;
  width: 300px;
  height: 50px;
  font-size: 20px;
  font-weight: 300;
`;

const PurchaseErase = styled.span`
  margin-top: 30px;
  font-size: 14px;
  color: #9c9c9c;
`;

const TotalPriceBox = styled.div`
  margin-top: 30px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  background-color: #fafafafa;
`;

const TotalPriceName = styled.h4`
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 1.2px;
`;

const TotalPrice = styled.span`
  letter-spacing: 1.3px;
  margin-top: 20px;
  font-size: 27px;
  font-weight: 700;
  font-style: italic;
  align-self: flex-end;
  color: ${({ pageMode }) => (pageMode ? '#f15746' : '#41b978')};
`;

const HopePriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const HopePriceName = styled.h4`
  color: ${({ pageMode }) => (pageMode ? '#9c9c9c' : 'black')};
  font-size: 18px;
`;

const HopePriceBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HopePrice = styled.p`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.3px;
`;

const BidPriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const BidPriceName = styled.h4`
  color: ${({ pageMode }) => (pageMode ? '#9c9c9c' : 'black')};
  font-size: 18px;
`;

const BidPrice = styled.p`
  font-weight: ${({ pageMode }) => (pageMode ? 600 : 400)};
  font-size: 18px;
`;

const DelieveryFeeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const DeliveryFeeName = styled.h4`
  color: #9c9c9c;
  font-size: 18px;
`;

const DelieveryFee = styled.p`
  font-weight: ${({ pageMode }) => (pageMode ? 600 : 400)};
  font-size: 18px;
  letter-spacing: 1px;
`;
const SellCommissionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const SellCommissionName = styled.h4`
  color: #9c9c9c;
  font-size: 18px;
`;

const SellCommission = styled.span`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1px;
`;

const Border = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  border: 1px solid #a3a3a3;
`;

const BidDeadlineWrap = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;
const BidDeadlineName = styled.h4`
  color: #585858;
  font-weight: 500;
`;
const BidDeadlineDate = styled.h5`
  color: #242424;
  font-weight: 500;
`;
export default Success;
