import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function BiddingPage({
  pageMode,
  detailData,
  currentBtn,
  setCurrentBtn,
  bidSubmit,
  handleDate,
  bidValue,
  setBidValue,
  formattedDate,
}) {
  const [currentId, setCurrentId] = useState(4);
  const [commission, setCommission] = useState('-');
  const [saleProceeds, setSaleProceeds] = useState('-');
  const navigate = useNavigate();

  function handleButton(targetId) {
    setCurrentBtn(targetId);
  }

  function goToPayment() {
    navigate('/payment');
  }

  function handleInput(e) {
    const regex = /^[0-9\b]+$/;
    let inputValue;
    inputValue = e.target.value.replace(/,/g, '');
    inputValue = Number(inputValue);
    if (inputValue === '' || regex.test(inputValue)) {
      setBidValue(inputValue.toLocaleString());
    }
  }

  function handleDeadLine(targetId) {
    setCurrentId(targetId);
  }

  function calculate() {
    setCommission((Number(bidValue.replace(/,/g, '')) * 0.05).toLocaleString());
    setSaleProceeds(
      (Number(bidValue.replace(/,/g, '')) * 0.95).toLocaleString()
    );
  }

  return (
    <BiddingContainer>
      <BiddingBox>
        <ProductContainer>
          <ProductImg itemImg={detailData.imageUrl} />
          <ProductInfo>
            <ModelNumber>{detailData.modelNumber}</ModelNumber>
            <KoreanName>{detailData.productName}</KoreanName>
            <ProductSize>ONE SIZE</ProductSize>
          </ProductInfo>
        </ProductContainer>
        <ImmediatePrice>
          <PurchasePrice>
            <div>즉시 구매가</div>
            <p>
              {detailData.buyNowPrice === null
                ? '-'
                : detailData.buyNowPrice?.toLocaleString()}
              원
            </p>
          </PurchasePrice>
          <SellPrice>
            <div>즉시 판매가</div>
            <p>{detailData.sellNowPrice?.toLocaleString()}원</p>
          </SellPrice>
        </ImmediatePrice>
        <ModeChangeContainer>
          {(pageMode ? PURCHASE_BUTTON : SELL_BUTTON).map((data, i) => {
            return (
              <ModeButton
                key={data.id}
                currentBtn={currentBtn}
                targetId={data.id}
                pageMode={pageMode}
                onClick={() => {
                  handleButton(data.id);
                }}
              >
                {data.buttonName}
              </ModeButton>
            );
          })}
        </ModeChangeContainer>
        <PriceBox>
          <Title>
            {currentBtn === 2
              ? pageMode
                ? `즉시 구매가`
                : `즉시 판매가`
              : pageMode
              ? `구매 희망가`
              : `판매 희망가`}
          </Title>
          {currentBtn === 2 ? (
            <Price>
              {pageMode
                ? detailData.buyNowPrice === null
                  ? '-'
                  : detailData.buyNowPrice?.toLocaleString()
                : detailData.sellNowPrice?.toLocaleString()}
              원
            </Price>
          ) : (
            <>
              <PriceInput
                onChange={handleInput}
                onBlur={calculate}
                value={bidValue}
                placeholder="희망가 입력"
              />
              <WonText>원</WonText>
            </>
          )}
        </PriceBox>
        {!pageMode && (
          <>
            <OtherCosts>
              <OtherCostsKey>검수비</OtherCostsKey>
              <OtherCostsValue>무료</OtherCostsValue>
            </OtherCosts>
            <OtherCosts>
              <OtherCostsKey>수수료</OtherCostsKey>
              <OtherCostsValue>
                {currentBtn === 2
                  ? `-${(detailData.sellNowPrice * 0.05)?.toLocaleString()}원`
                  : '-' + commission + '원'}
              </OtherCostsValue>
            </OtherCosts>
            <OtherCosts>
              <OtherCostsKey>배송비</OtherCostsKey>
              <OtherCostsValue>선불 • 판매자 부담</OtherCostsValue>
            </OtherCosts>
          </>
        )}
        {pageMode && (
          <PaymentInfo>총 결제금액은 다음 화면에서 계산됩니다.</PaymentInfo>
        )}
        {currentBtn === 1 && (
          <DeadLineContainer>
            <DeadLineTitle>입찰 마감기한</DeadLineTitle>
            <DeadLineDate>{`${
              DEADLINE_SELECT[currentId - 1].select
            } (${formattedDate} 마감)`}</DeadLineDate>
            <DeadLineChoice>
              {DEADLINE_SELECT.map(data => {
                return (
                  <SelectBox
                    key={data.id}
                    currentId={currentId}
                    targetId={data.id}
                    onClick={() => {
                      handleDeadLine(data.id);
                      handleDate(data.id);
                    }}
                  >
                    {data.select}
                  </SelectBox>
                );
              })}
            </DeadLineChoice>
          </DeadLineContainer>
        )}
        <TotalPayment>
          <LeftText>{pageMode ? '총 결제금액' : '정산 금액'}</LeftText>
          <RightText pageMode={pageMode}>
            {pageMode
              ? '다음 화면에서 확인'
              : currentBtn === 1
              ? saleProceeds + '원'
              : `${(detailData.sellNowPrice * 0.95)?.toLocaleString()}원`}
          </RightText>
        </TotalPayment>
        <ContinueBtn
          onClick={() => {
            goToPayment();
            bidSubmit();
          }}
        >
          {pageMode
            ? currentBtn === 2
              ? `즉시 구매 계속`
              : '구매 입찰 계속'
            : currentBtn === 2
            ? `즉시 판매 계속`
            : `판매 입찰 계속`}
        </ContinueBtn>
      </BiddingBox>
    </BiddingContainer>
  );
}

const BiddingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 160px;
  background-color: #fafafa;
`;

const BiddingBox = styled.div`
  padding: 32px;
  width: 700px;
  background-color: #ffffff;
  box-shadow: 4px 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid #ebebeb;
`;

const ProductImg = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid #ebebeb;
  background-image: ${({ itemImg }) => `url(${itemImg})`};
  background-size: cover;
  background-position: center;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const ModelNumber = styled.div`
  line-height: 17px;
  font-size: 14px;
  font-weight: bold;
`;

const KoreanName = styled.div`
  font-size: 13px;
  color: rgba(34, 34, 34, 0.5);
  margin-bottom: 20px;
`;

const ProductSize = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const ImmediatePrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
`;

const PurchasePrice = styled.div`
  flex: 1;
  text-align: center;

  div {
    line-height: 14px;
    font-size: 12px;
    color: rgba(34, 34, 34, 0.5);
  }

  p {
    margin-top: 10px;
    font-size: 16px;
  }
`;

const SellPrice = styled(PurchasePrice)`
  border-left: 1px solid #ebebeb;
`;

const ModeChangeContainer = styled.div`
  display: flex;
  height: 50px;
  padding: 3px;
  margin-top: 40px;
  border-radius: 80px;
  border: 1px solid #ebebeb;
  margin-bottom: 27px;
  background-color: #f4f4f4;
`;

const ModeButton = styled.div`
  flex: 1;
  border-radius: 80px;
  padding: 16px 0;
  font-size: 14px;
  font-weight: ${({ currentBtn, targetId }) =>
    currentBtn === targetId ? 600 : 400};
  background-color: ${({ pageMode, currentBtn, targetId }) =>
    pageMode
      ? currentBtn === targetId
        ? '#ef6253'
        : ''
      : currentBtn === targetId
      ? '#41b978'
      : ''};
  color: ${({ currentBtn, targetId }) =>
    currentBtn === targetId ? '#ffffff' : 'rgba(34, 34, 34, 0.8)'};
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid #ebebeb;
`;

const Title = styled.div`
  padding-bottom: 30px;
  font-size: 14px;
  font-weight: 600;
`;

const Price = styled.div`
  padding-top: 25px;
  line-height: 26px;
  font-size: 20px;
  font-weight: 600;
  span {
    margin-left: 5px;
    font-style: normal;
  }
`;

const PriceInput = styled.input`
  flex-grow: 1;
  border: none;
  font-size: 20px;
  text-align: right;
  outline: none;

  &::placeholder {
    color: #bcbcbc;
  }
`;

const WonText = styled.div`
  padding-top: 9px;
  line-height: 26px;
  font-size: 20px;
  letter-spacing: -0.3px;
  font-weight: 600;
`;

const OtherCosts = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const OtherCostsKey = styled.div`
  font-size: 13px;
  color: rgba(34, 34, 34, 0.5);
`;

const OtherCostsValue = styled.div`
  text-align: right;
  color: #222;
  font-size: 14px;
`;

const PaymentInfo = styled.div`
  margin-bottom: 30px;
  padding-top: 30px;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.5);
`;

const TotalPayment = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-top: 20px;
  border-top: 1px solid #ebebeb;
`;

const LeftText = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #222222;
`;

const RightText = styled.div`
  font-size: ${({ pageMode }) => (pageMode ? 15 : 25)}px;
  font-weight: ${({ pageMode }) => (pageMode ? 400 : 600)};
  color: ${({ pageMode }) => (pageMode ? 'rgba(34, 34, 34, 0.5)' : '#31b46e')};
`;

const DeadLineContainer = styled.div`
  padding-top: 30px;
  border-top: 1px solid #ebebeb;
`;

const DeadLineTitle = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 600;
`;

const DeadLineDate = styled.div`
  margin-bottom: 15px;
  font-size: 15px;
  color: #222222;
`;

const DeadLineChoice = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 30px;
`;

const SelectBox = styled.div`
  flex: 1;
  padding: 13px 18px 0;
  height: 42px;
  border: ${({ currentId, targetId }) =>
    currentId === targetId ? '2px solid #000000' : '1px solid #d3d3d3'};
  background-color: #ffffff;
  border-radius: 12px;
  font-size: 14px;
  font-weight: ${({ currentId, targetId }) =>
    currentId === targetId ? '700' : '400'};
  color: rgba(34, 34, 34, 0.8);
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: ${({ currentId, targetId }) =>
      currentId === targetId ? ' #ffffff' : '#ebebeb'};
  }
`;

const ContinueBtn = styled.div`
  width: 100%;
  font-size: 16px;
  height: 52px;
  border-radius: 12px;
  color: #ffffff;
  background-color: #222222;
  font-weight: 400;
  text-align: center;
  padding-top: 18px;
  &:hover {
    cursor: pointer;
  }
`;

export default BiddingPage;

const PURCHASE_BUTTON = [
  { id: 1, buttonName: '구매 입찰' },
  { id: 2, buttonName: '즉시 구매' },
];

const SELL_BUTTON = [
  { id: 1, buttonName: '판매 입찰' },
  { id: 2, buttonName: '즉시 판매' },
];

const DEADLINE_SELECT = [
  { id: 1, select: '1일' },
  { id: 2, select: '3일' },
  { id: 3, select: '7일' },
  { id: 4, select: '30일' },
  { id: 5, select: '60일' },
];
