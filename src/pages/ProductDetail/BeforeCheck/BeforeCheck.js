import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';

function BeforeCheck() {
  const [toggle, setToggle] = useState([false, false, false]);
  // const [currentId, setCurrentId] = useState(0);

  function handleToggle(targetId) {
    const newToggle = [...toggle];
    newToggle[targetId - 1] = !newToggle[targetId - 1];
    setToggle([...newToggle]);
  }

  // function handleToggle(targetId) {
  //   currentId === 0 ? setCurrentId(targetId) : setCurrentId(0);
  // }

  return (
    <div>
      <Title>구매 전 꼭 확인해주세요!</Title>
      {CONFIRM.map((data, i) => {
        return (
          <div key={data.id}>
            <GuideHeader>
              <GuideTitle>{data.title}</GuideTitle>
              <ToggleBtn
                onClick={() => {
                  handleToggle(data.id);
                }}
              >
                {toggle[i] ? <UpBtn /> : <DownBtn />}
              </ToggleBtn>
            </GuideHeader>
            <GuideContents toggle={toggle[i]}>
              <h2>{data.Headline}</h2>
              <p>{data.content1}</p>
              <p>{data.content2}</p>
            </GuideContents>
          </div>
        );
      })}
    </div>
  );
}

const Title = styled.h1`
  padding-bottom: 12px;
  border-bottom: 1px solid #ebebeb;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
`;

const GuideHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid #222222;
`;

const GuideTitle = styled.div`
  font-size: 15px;
  flex-grow: 1;
`;

const DownBtn = styled(FiChevronDown)``;

const UpBtn = styled(FiChevronUp)``;

const ToggleBtn = styled.div`
  text-align: right;

  ${DownBtn} {
    font-size: 23px;
    color: #bbbbbb;
    &:hover {
      cursor: pointer;
    }
  }

  ${UpBtn} {
    font-size: 23px;
    color: #bbbbbb;
    &:hover {
      cursor: pointer;
    }
  }
`;

const GuideContents = styled.div`
  border-bottom: 1px solid #ebebeb;
  padding: 20px 0;
  display: ${({ toggle }) => (toggle === true ? 'block' : 'none')};

  h2 {
    font-size: 14px;
    font-weight: 600;
    color: rgba(34, 34, 34, 1);
  }

  p {
    margin: 20px 0;
    font-size: 13px;
    color: rgba(34, 34, 34, 0.8);
  }
`;

export default BeforeCheck;

const CONFIRM = [
  {
    id: 1,
    title: '배송 기간 안내',
    Headline:
      'DREAM은 최대한 빠르게 모든 상품을 배송하기 위해 노력하고 있습니다. 배송 시간은 판매자가 검수를 위하여 상품을 검수센터로 보내는 속도에 따라 차이가 있습니다.',
    content1:
      '- 거래가 체결된 시점부터 48시간(일요일•공휴일 제외) 내에 판매자가 상품을 발송해야 하며, 통상적으로 발송 후 1-2일 내에 DREAM 검수센터에 도착합니다.',
    content2:
      '- 검수센터 출고는 매 영업일에 진행하고 있으며, 출고 마감시간은 오후 5시입니다. 출고 마감시간 이후 검수 완료건은 운송장번호는 입력되지만 다음 영업일에 출고됩니다.',
  },
  {
    id: 2,
    title: '검수 안내',
    Headline:
      '판매자의 상품이 검수센터에 도착하면 전담 검수팀이 철저한 분석과 검사로 정가품 확인을 진행합니다.',
    content1:
      '- 검수센터에서는 정가품 여부를 확인하기 위하여, 지속적으로 데이터를 쌓고 분석하여 기록하고 있습니다.',
    content2:
      '- 업계 전문가로 구성된 검수팀은 박스와 상품의 라벨에서 바느질, 접착, 소재 등 모든 것을 검수합니다.',
  },
  {
    id: 3,
    title: '구매 환불 / 취소 / 교환 안내',
    Headline:
      'DREAM은 익명 거래를 기반으로 판매자가 판매하는 상품을 구매자가 실시간으로 구매하여 거래를 체결합니다.',
    content1:
      '- 단순 변심이나 실수에 의한 취소/교환/반품이 불가능합니다. 상품을 원하지 않으시는 경우 언제든지 DREAM에서 재판매를 하실 수 있습니다.',
    content2:
      '- 상품 수령 후, 이상이 있는 경우 DREAM 고객센터로 문의해주시기 바랍니다.',
  },
];
