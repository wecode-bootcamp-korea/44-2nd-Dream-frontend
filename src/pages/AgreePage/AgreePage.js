import React, { useState } from 'react';
import styled from 'styled-components';
import ConfirmModal from './ConfirmModal/ConfirmModal';

function AgreePage() {
  const [confirmModal, setConfirmModal] = useState(false);
  const [isChecked, setIsChecked] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  function confirmModalOpen(targetId) {
    if (targetId === 1) {
      setConfirmModal(prev => !prev);
    }
  }

  function confirmModalClose() {
    setConfirmModal(prev => !prev);
  }

  function handleCheckBox(targetId) {
    const newIsChecked = [...isChecked];
    newIsChecked[targetId - 1] = !newIsChecked[targetId - 1];
    setIsChecked(newIsChecked);
  }

  const allChecked = isChecked.every(el => el === true);

  return (
    <AgreeContainer>
      {confirmModal && <ConfirmModal confirmModalClose={confirmModalClose} />}
      {confirmModal && (
        <BlackModal
          onClick={() => {
            confirmModalClose();
          }}
        />
      )}
      <AgreeBox>
        <AgreeBoxContents>
          <AgreeBoxTItle>
            <RedColorTItle>구매</RedColorTItle>
            <BlackColorTItle>하시기 전에 꼭 확인하세요.</BlackColorTItle>
          </AgreeBoxTItle>
          <ProductContainer>
            <ProductImg />
            <ProductInfo>
              <ModelNumber>1904927</ModelNumber>
              <EnglishName>Stussy Plush T-Shirt Black</EnglishName>
              <KoreanName>스투시 플러쉬 티셔츠 블랙</KoreanName>
              <ProductSize>ONE SIZE</ProductSize>
            </ProductInfo>
          </ProductContainer>
          {PURCHASE_CONFIRM.map(data => {
            return (
              <ConfirmContainer key={data.id}>
                <ConfirmContent>
                  <HeadLine>{data.headline}</HeadLine>
                  <Content>{data.content}</Content>
                  {data.modallink && <ModalLink>{data.modallink}</ModalLink>}
                </ConfirmContent>
                <CheckBox
                  type="checkbox"
                  onChange={() => {
                    handleCheckBox(data.id);
                    confirmModalOpen(data.id);
                  }}
                />
              </ConfirmContainer>
            );
          })}
          <ContinueButton allChecked={allChecked}>구매 계속</ContinueButton>
        </AgreeBoxContents>
      </AgreeBox>
    </AgreeContainer>
  );
}

const AgreeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 160px;
  background-color: #fafafa;
`;

const BlackModal = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const AgreeBox = styled.div`
  width: 700px;
  background-color: #ffffff;
  box-shadow: 4px 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const AgreeBoxContents = styled.div`
  padding: 32px;
`;

const AgreeBoxTItle = styled.div``;

const RedColorTItle = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: #f15746;
`;

const BlackColorTItle = styled(RedColorTItle)`
  color: #222222;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #222222;
`;

const ProductImg = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid #ebebeb;
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

const EnglishName = styled.div`
  font-size: 14px;
`;

const KoreanName = styled.div`
  font-size: 13px;
  color: rgba(34, 34, 34, 0.5);
`;

const ProductSize = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

const ConfirmContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ebebeb;
`;

const ConfirmContent = styled.div``;

const HeadLine = styled.div`
  font-size: 15px;
  color: #222222;
`;

const Content = styled.div`
  margin-top: 4px;
  line-height: 16px;
  font-size: 13px;
  color: rgba(34, 34, 34, 0.5);
`;

const ModalLink = styled.div`
  display: inline-block;
  margin-top: 8px;
  line-height: 20px;
  font-size: 14px;
  color: #1d85e6;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

const CheckBox = styled.input`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-left: 40px;
  accent-color: #222222;
  &:hover {
    cursor: pointer;
  }
`;

const ContinueButton = styled.div`
  width: 100%;
  height: 52px;
  margin-top: 20px;
  padding-top: 19px;
  border-radius: 12px;
  background-color: ${({ allChecked }) => (allChecked ? '#222222' : '#ebebeb')};
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;

export default AgreePage;

const PURCHASE_CONFIRM = [
  {
    id: 1,
    headline: '구매하려는 상품이 맞습니다.',
    content:
      '상품 이미지, 모델번호, 출시일, 상품명, 사이즈를 한 번 더 확인했습니다.',
  },
  {
    id: 2,
    headline: '국내/해외에서 발매한 정품 • 새상품입니다.',
    content:
      '모든 구성품이 그대로이며, 한 번도 착용하지 않은 정품 • 새상품입니다. 국내 발매 상품 여부는 확인드리지 않습니다.',
  },
  {
    id: 3,
    headline:
      '제조사에서 불량으로 인정하지 않는 기준은 하자로 판단하지 않습니다.',
    content:
      '박스/패키지와 상품 컨디션에 민감하시다면 검수 기준을 반드시 확인하시기 바랍니다.',
    modallink: '검수기준 보기',
  },
  {
    id: 4,
    headline: '패키지(포장) 개봉 검수에 대한 주의사항을 확인합니다.',
    content:
      '검수 과정 중 밀봉 및 실링이 모두 개봉되어 DREAM 패키지로 포장되어 발송됩니다. 오리지널 폴리백이 포함되니 않을 수 있습니다.',
    modallink: '검수기준 보기',
  },
  {
    id: 5,
    headline: 'DREAM의 최신 이용정책을 모두 확인하였으며, 구매를 계속합니다.',
    content:
      '건전하고 안전한 거래를 위해 반드시 숙지해야 할 미입고, 페널티, 부정거래 등의 이용정책을 확인했습니다.',
    modallink: '이용정책 보기',
  },
];

const SEll_CONFIRM = [
  {
    id: 1,
    headline: '판매하려는 상품이 맞습니다.',
    content:
      '상품 이미지, 모델번호, 출시일, 상품명, 사이즈를 한 번 더 확인했습니다.',
  },
  {
    id: 2,
    headline: '국내/해외에서 발매한 정품 • 새상품입니다.',
    content:
      '모든 구성품이 그대로이며, 한 번도 착용하지 않은 정품 • 새상품입니다. 손상/오염/사용감 있는 상품은 판매가 불가능 합니다.',
  },
  {
    id: 3,
    headline: '박스/패키지의 상태를 확인합니다.',
    content:
      '박스/패키지 상태에 따른 검수 기준과 패키지(포장) 개봉 검수에 대한 주의사항을 확인했습니다.',
    modallink: '검수기준 보기',
  },
  {
    id: 4,
    headline: '이중 포장하여 선불 발송합니다.',
    content:
      '반드시 이중 포장하여 택배 상자에 담아 선불 발송합니다. 합배송은 권장 하지 않으며 이로 인한 박스/패키지 훼손은 판매자의 책임입니다.',
  },
  {
    id: 5,
    headline: 'DREAM의 최신 이용정책을 모두 확인하였으며, 판매를 계속합니다.',
    content:
      '건전하고 안전한 거래를 위해 반드시 숙지해야 할 미입고, 페널티, 부정거래 등의 이용정책을 확인했습니다.',
    modallink: '이용정책 보기',
  },
];
