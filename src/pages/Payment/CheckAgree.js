import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadTossPayments } from '@tosspayments/payment-sdk';

import styled from 'styled-components';

const CheckAgree = ({
  pageMode,
  bidData,
  writeInfo,
  currentBtn,
  inputValue,
  accountData,
}) => {
  const [checked, setChecked] = useState(
    pageMode
      ? [false, false, false, false]
      : [false, false, false, false, false]
  );
  console.log(accountData);
  const navigate = useNavigate();
  const { cardId, accountId } = accountData;
  const handleCheckBox = targetId => {
    const newIsChecked = [...checked];
    newIsChecked[targetId - 1] = !newIsChecked[targetId - 1];
    setChecked(newIsChecked);
  };

  const bidtype = pageMode ? 'buying' : 'selling';
  const paytype = currentBtn === 1 ? '/bidding' : '';
  const tossPay = (
    dealNumber,
    bidPrice,
    commission,
    productName,
    writeInfo,
    pageMode,
    currentBtn,
    biddingId,
    addressData,
    inputValue,
    accountData
  ) => {
    const clientKey = process.env.REACT_APP_TOSS_CLIENT_KEY;

    console.log(dealNumber);

    loadTossPayments(clientKey).then(tossPayments => {
      tossPayments
        .requestPayment('카드', {
          // 결제 수단 파라미터
          // 결제 정보 파라미터
          amount: Number(bidPrice) + Number(commission),
          orderId: dealNumber,
          orderName: productName,
          customerName: inputValue.name,
        })
        .then(function (result) {
          fetch(`http://10.58.52.75:3000/payment${paytype}/${bidtype}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              Authorization: localStorage.getItem('token'),
            },
            body: JSON.stringify(
              pageMode
                ? {
                    dealNumber: dealNumber,
                    addressId: addressData.addressId,
                    biddingId: biddingId,
                  }
                : {
                    dealNumber: bidData.bidData.dealNumber,
                    accountNumberId: bidData.accountId,
                    cardNumberId: bidData.cardId,
                    biddingId: bidData.bidData.biddingId,
                  }
            ),
          })
            .then(res => res.json())
            .then(data => {
              // setSuccess(res);
              console.log('checkAgree : ', data);
              navigate('/success', { state: data });
            });
        })
        // .then(res => {
        //   setSuccess(res);
        //   console.log('checkAgree : ', res);
        //   navigate('/success', { state: res });
        // })
        .catch(function (error) {
          if (error.code === 'USER_CANCEL') {
            // 결제 고객이 결제창을 닫았을 때 에러 처리
          } else if (error.code === 'INVALID_CARD_COMPANY') {
            // 유효하지 않은 카드 코드에 대한 에러 처리
          }
        });
    });
  };

  const purchaseBid = bidData => {
    console.log(bidData.bidData);
    fetch(`http://10.58.52.75:3000/payment${paytype}/${bidtype}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(
        pageMode
          ? {
              dealNumber: bidData.bidData.dealNumber,
              addressId: bidData.addressData.addressId,
              biddingId: bidData.bidData.biddingId,
            }
          : {
              dealNumber: bidData.bidData.dealNumber,
              accountNumberId: accountId,
              cardNumberId: cardId,
              biddingId: bidData.bidData.biddingId,
            }
      ),
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        navigate('/success', { state: data });
      });
  };

  const allChecked = checked.every(check => check === true);

  function goToBid() {
    if (pageMode && currentBtn === 2) {
      tossPay(
        bidData.dealNumber,
        bidData.bidPrice,
        bidData.commission,
        bidData.productName,
        bidData.biddingId,

        writeInfo,
        pageMode,
        currentBtn
      );
    } else {
      purchaseBid({ bidData });
      navigate('/success');
    }
  }

  return (
    <CheckAgreeContainer>
      {(pageMode ? AGREE_PURCHASE : AGREE_SELL).map(value => {
        return (
          <CheckBoxWrap key={value.id}>
            <AllDetail>
              <CheckDetailWrap>
                <CheckAgreeDetail pageMode={pageMode} id={value.id}>
                  {value.title}
                </CheckAgreeDetail>
                <CheckSub>{value.sub}</CheckSub>
              </CheckDetailWrap>
              <StyledLabel>
                <StyledInput
                  type="checkbox"
                  onChange={() => {
                    handleCheckBox(value.id);
                  }}
                />
              </StyledLabel>
            </AllDetail>
            <Border id={value.id} pageMode={pageMode} />
          </CheckBoxWrap>
        );
      })}
      <TotalPriceWrap>
        <TotalPriceName>{pageMode ? '총 결제금액' : '정산금액'}</TotalPriceName>
        <TotalPrice pageMode={pageMode}>
          {pageMode
            ? (
                Number(bidData.bidPrice) + Number(bidData.commission)
              )?.toLocaleString()
            : (
                Number(bidData.bidPrice) - Number(bidData.commission)
              )?.toLocaleString()}
          원
        </TotalPrice>
      </TotalPriceWrap>
      <PaymentButton
        allChecked={allChecked}
        onClick={goToBid}
        disabled={!allChecked}
      >
        {pageMode
          ? currentBtn === 1
            ? '구매 입찰하기'
            : '결제하기'
          : currentBtn === 1
          ? '판매 입찰하기'
          : '바로 판매하기'}
      </PaymentButton>
    </CheckAgreeContainer>
  );
};

const CheckAgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 840px;
  padding: 32px;
  margin-top: 8px;
`;

const AllDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

const CheckDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-left: 40px;
  accent-color: #222222;
  &:hover {
    cursor: pointer;
  }
`;

const CheckBoxWrap = styled.div``;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const CheckAgreeDetail = styled.h3`
  font-size: ${({ pageMode, id }) =>
    id === 4 && pageMode ? '20px' : id === 5 && !pageMode ? '20px' : '19px'};
  font-weight: ${({ pageMode, id }) =>
    id === 4 && pageMode ? 'bold' : id === 5 && !pageMode && 'bold'};
  margin-bottom: 12px;
  padding-top: 15px;
  line-height: 1.3;
  color: #3e3e3e;
  flex-wrap: wrap;
  width: 660px;
`;

const CheckSub = styled.p`
  font-size: 16px;
  color: #a3a3a3;
`;
const Border = styled.div`
  border-bottom: ${({ pageMode, id }) =>
    id === 4 && pageMode
      ? '1px solid none'
      : id === 5 && !pageMode
      ? '1px solid none'
      : '1px solid #a3a3a3'};
`;

const TotalPriceWrap = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalPriceName = styled.h2`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1px;
`;

const TotalPrice = styled.span`
  color: ${({ pageMode }) => (pageMode ? ' #f15746' : '#41b978')};
  font-size: 27px;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 1px;
`;

const PaymentButton = styled.button`
  font-weight: 600;
  margin-top: 10px;
  height: 62px;
  border-radius: 12px;
  letter-spacing: -0.16px;
  font-size: 19px;
  border: none;
  color: white;
  background-color: ${({ allChecked }) => allChecked && '#222222'};
  &:hover {
    cursor: pointer;
  }
`;

export default CheckAgree;

const AGREE_PURCHASE = [
  {
    id: 1,
    title:
      '판매자의 판매거부, 배송지연, 미입고 등의 사유가 발생할 경우, 거래가취소될 수 있습니다.',
    sub: '앱 알림 해제, 알림푹 차단, 전화번호 변경 후 미등록 시에는 거래 진행 상태 알람을 받을 수 없습니다.',
  },
  {
    id: 2,
    title:
      '창고 보관을 선택한 경우, 구매자에게 배송되지 않고 DREAM 창고에 보관됩니다.',
    sub: '검수 합격 후 보관이 완료되면 창고 이용료(현재 첫 30일 무료)가 결제됩니다.',
  },
  {
    id: 3,
    title:
      " '바로 결제하기' 를 선택하시면 즉시 결제가 진행되며, 단순 변심이나 실수에 의한 취소가 불가능합니다.",
    sub: '본 거래는 개인간 거래로 전자상거래법(법 17조)에 따른 청약철회(환불, 교환) 규정이 적용되지 않습니다.',
  },
  {
    id: 4,
    title: '구매 조건을 모두 확인하였으며, 거래 진행에 동의합니다.',
  },
];

const AGREE_SELL = [
  {
    id: 1,
    title:
      '거래가 체결되면 일요일 ・ 공휴일ㅇ르 제외하고 48시간 내에 KREAM으로 발송을 완료한 후, 발송 정보를 정확히 입력해야 합니다.',
    sub: '착불 배송시 판매 금액에서 차감 정산하며, 미정산 시 별도 고지없이 해당 금액을 결제 시도할 수 있습니다.',
  },
  {
    id: 2,
    title:
      '송장 번호 미기재 ・ 오입력 시 입고가 진행되지 않으며, 발송 후 5일(일요일 ・ 공휴일 제외) 내 미도착은 허위 정보 입력으로 간주하여 미입고 페널티를 부과합니다.',
    sub: '앱 알림 해제, 알림톡 차단, 전화번호 변경 후 미등록 시에는 거래 진행 상태 알림을 받을 수 없으며 이로 인한 거래 실패는 판매자의 책임입니다.',
  },
  {
    id: 3,
    title: '검수 기준과 패널티 및 이용 정책을 다시 한번 확인하였습니다',
    sub: '이용정책 위반 시, 판매 금액의 최대 15.0%의 패널티가 부과도비니다. 패널티 회피 시 이후 거래가 제한되며 별도 고지없이 해당 금액을 결제 시도할 수 있습니다.',
  },
  {
    id: 4,
    title:
      " '바로 판매하기' 를 선택하시면 즉시 거래가 체결되며, 단순 변심이나 실수에 의한 취소가 불가능합니다. ",
  },
  { id: 5, title: '판매 조건을 모두 확인하였으며, 거래 진행에 동의합니다' },
];
