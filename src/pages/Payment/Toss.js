import { loadTossPayments } from '@tosspayments/payment-sdk';

const tossPay = (dealNumber, bidPrice, commission, productName, writeInfo) => {
  const clientKey = process.env.REACT_APP_TOSS_CLIENT_KEY;

  loadTossPayments(clientKey).then(tossPayments => {
    tossPayments
      .requestPayment('카드', {
        // 결제 수단 파라미터
        // 결제 정보 파라미터
        amount: bidPrice + commission,
        orderId: dealNumber,
        orderName: productName,
        customerName: '조건호',
        successUrl: 'http://localhost:3000/success',
        failUrl: 'http://localhost:3000/fail',
      })
      .then(function (result) {
        fetch('http://10.58.52.75:3000/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({
            dealNumber: 'd6155182-e589-11ed-9b10-c7d0bb38e7df',
            address: writeInfo.address,
            userId: 51,
          }),
        });
      })
      .catch(function (error) {
        if (error.code === 'USER_CANCEL') {
          // 결제 고객이 결제창을 닫았을 때 에러 처리
        } else if (error.code === 'INVALID_CARD_COMPANY') {
          // 유효하지 않은 카드 코드에 대한 에러 처리
        }
      });
  });
};

export default tossPay;
