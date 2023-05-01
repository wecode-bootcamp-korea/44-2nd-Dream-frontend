import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

const DeliveryModal = ({ confirmModal, setMessage }) => {
  const [currentId, setCurrentId] = useState(0);

  const handleId = targetId => {
    setCurrentId(targetId);
  };

  const handleMessage = () => {
    confirmModal();
    setMessage(REQUEST_METHOD[currentId - 1].detail);
  };

  return (
    <DeliveryModalContainer>
      <RequestModalWrap>
        <RequestTitle> 배송 요청 사항</RequestTitle>
        <Exit
          onClick={() => {
            confirmModal();
          }}
        >
          x
        </Exit>
      </RequestModalWrap>

      {REQUEST_METHOD.map(method => {
        return (
          <SelectRequestWrap key={method.id} id={method.id}>
            <SelectRequestDetail
              onClick={() => handleId(method.id)}
              id={method.id}
              currentId={currentId}
            >
              {method.detail}
            </SelectRequestDetail>

            <CheckIcon
              onClick={() => handleId(method.id)}
              className="check"
              id={method.id}
              currentId={currentId}
            >
              {method.check}
            </CheckIcon>
          </SelectRequestWrap>
        );
      })}
      <Buttons>
        <CancelBtn
          onClick={() => {
            confirmModal();
          }}
        >
          취소
        </CancelBtn>
        <SubmitBtn onClick={handleMessage}>적용하기</SubmitBtn>
      </Buttons>
    </DeliveryModalContainer>
  );
};

const DeliveryModalContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  width: 580px;
  height: 580px;
  padding: 32px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
`;
const RequestModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RequestTitle = styled.h2`
  display: flex;
  font-size: 21px;
  align-items: center;
  text-align: center;
  font-weight: 700;
`;

const Exit = styled.span`
  top: 19px;
  right: 30px;
  position: absolute;
  font-size: 40px;
  font-weight: 300;
  color: gray;
  :hover {
    cursor: pointer;
  }
`;

const SelectRequestWrap = styled.div`
  margin-top: 37px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: ${props =>
    props.id === 5 ? '1px solid none' : '2px solid #f4f4f4'};
  :hover {
    cursor: pointer;
  }
`;

const CheckIcon = styled.div`
  color: ${props => (props.id === props.currentId ? 'black' : 'white')};
  font-size: 24px;
`;

const SelectRequestDetail = styled.p`
  font-size: 17px;
  font-weight: ${props => (props.id === props.currentId ? 700 : 400)};
`;

const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const CancelBtn = styled.button`
  margin-right: 10px;
  width: 150px;
  height: 55px;
  border: 1px solid gray;
  background-color: white;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 300;
  &:hover {
    cursor: pointer;
  }
`;

const SubmitBtn = styled.button`
  width: 150px;
  height: 55px;
  border: none;
  background-color: black;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;
export default DeliveryModal;
const REQUEST_METHOD = [
  {
    id: 1,
    detail: ' 요청사항 없음',
    check: <AiOutlineCheck />,
  },
  {
    id: 2,
    detail: ' 문 앞에 놓아주세요',
    check: <AiOutlineCheck />,
  },
  {
    id: 3,
    detail: ' 경비실에 맡겨 주세요',
    check: <AiOutlineCheck />,
  },
  {
    id: 4,
    detail: ' 파손 위험 상품입니다.  배송 시 주의 해주세요.',
    check: <AiOutlineCheck />,
  },
  {
    id: 5,
    detail: ' 직접 입력',
    check: <AiOutlineCheck />,
  },
];
