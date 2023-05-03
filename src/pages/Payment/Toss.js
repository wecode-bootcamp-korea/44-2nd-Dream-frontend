// import useState from 'react';
// import { loadTossPayments } from '@tosspayments/payment-sdk';
// import { useNavigate } from 'react-router-dom';

// const tossPay = (
//   dealNumber,
//   bidPrice,
//   commission,
//   productName,
//   writeInfo,
//   pageMode,
//   currentBtn,
//   biddingId
// ) => {
//   const clientKey = process.env.REACT_APP_TOSS_CLIENT_KEY;
//   const bidtype = pageMode ? 'buying' : 'selling';
//   const paytype = currentBtn === 1 ? '/bidding' : '';
//   console.log(dealNumber);
//   const [success, setSuccess] = useState({});
//   const navigate = useNavigate();

//   const goToSuccess = () => {
//     navigate('/success');
//   };
//   loadTossPayments(clientKey).then(tossPayments => {
//     tossPayments
//       .requestPayment('카드', {
//         // 결제 수단 파라미터
//         // 결제 정보 파라미터
//         amount: Number(bidPrice) + Number(commission),
//         orderId: dealNumber,
//         orderName: productName,
//         customerName: '조건호',
//       })
//       .then(function (result) {
//         fetch(`http://10.58.52.75:3000/payment${paytype}/${bidtype}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json;charset=utf-8',
//             Authorization: localStorage.getItem('token'),
//           },
//           body: JSON.stringify(
//             pageMode
//               ? {
//                   dealNumber: dealNumber,
//                   addressId: 'sdf',
//                   biddingId: biddingId,
//                 }
//               : {
//                   dealNumber: dealNumber,
//                   계좌번호: 3504042,
//                 }
//           ),
//         }).then(res => res.json());
//       })
//       .catch(function (error) {
//         if (error.code === 'USER_CANCEL') {
//           // 결제 고객이 결제창을 닫았을 때 에러 처리
//         } else if (error.code === 'INVALID_CARD_COMPANY') {
//           // 유효하지 않은 카드 코드에 대한 에러 처리
//         }
//       });
//   });
// };

// export default tossPay;
