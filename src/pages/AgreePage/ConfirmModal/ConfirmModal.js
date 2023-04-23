import React from 'react';
import styled from 'styled-components';

function ConfirmModal({ confirmModalClose }) {
  return (
    <ConfirmModalContainer>
      <ConfirmModalTitle>상품 특이사항 안내</ConfirmModalTitle>
      <ConfirmModalClose
        onClick={() => {
          confirmModalClose();
        }}
      >
        ✕
      </ConfirmModalClose>
      <ConfirmModalHeadLine>
        보유한 상품만 거래되는 것이 원칙입니다.
      </ConfirmModalHeadLine>
      <ConfirmModalContent>
        <ContentTitle>반드시 보유한 상품만 거래하세요.</ContentTitle>
        <p>
          판매자는 거래 체결 후, 48시간 이내(일,공휴일 제외)에 상품을 발송하여야
          합니다.
        </p>
        <p>
          보유한 상품이 아니거나, 즉시 발송이 불가능한 경우의 사전 거래 체결은
          발송지연, 미입고 등으로 <span>페널티 15%</span>가 부과되며 향후 거래가
          제한될 수 있습니다.
        </p>
        <p>
          구매자는 조기 거래 체결 시, 판매자의 상품 미보유 혹은 정식 발매 제품과
          상이한 모델, 가품 등으로 인한 거래 실패 가능성이 있으므로 주의가
          필요합니다.
        </p>
      </ConfirmModalContent>
      <ConfirmModalBtn
        onClick={() => {
          confirmModalClose();
        }}
      >
        동의 후 계속
      </ConfirmModalBtn>
    </ConfirmModalContainer>
  );
}

const ConfirmModalContainer = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 440px;
  height: 565px;
  padding: 32px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const ConfirmModalTitle = styled.div`
  line-height: 22px;
  padding: 0 50px 20px;
  height: 60px;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  text-align: center;
  background-color: #fff;
`;

const ConfirmModalClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const ConfirmModalHeadLine = styled.div`
  padding-bottom: 20px;
  padding-right: 70px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 25px;
  line-height: 32px;
  border-bottom: 2px solid #000000;
`;
const ConfirmModalContent = styled.div`
  p {
    margin: 20px 0;
    font-size: 14px;
    color: #222222;
    line-height: 1.5;
  }

  span {
    color: #f15746;
    font-weight: 600;
  }
`;
const ContentTitle = styled.div`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 600;
`;
const ConfirmModalBtn = styled.div`
  padding: 18px 25px 0;
  margin-top: 40px;
  height: 52px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #222;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export default ConfirmModal;
