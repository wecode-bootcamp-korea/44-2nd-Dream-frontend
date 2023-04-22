import React from 'react';
import styled from 'styled-components';
import guaranteeImg1 from '../../../assets/productdetail/guarantee1.png';
import guaranteeImg2 from '../../../assets/productdetail/guarantee2.png';
import guaranteeImg3 from '../../../assets/productdetail/guarantee3.png';

function Guarantee() {
  return (
    <>
      <div>
        {GUARANTEE_DATA.map((data, i) => {
          return (
            <GuaranteeType key={i}>
              <Image src={data.image} />
              <Contents>
                <Title>{data.title}</Title>
                <Description>{data.description}</Description>
              </Contents>
            </GuaranteeType>
          );
        })}
      </div>
      <Responsibility>
        드림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은
        개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은
        각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타 거래 체결 과정에서
        고지하는 내용 등에 따라 검수하고 보증하는 내용에 대한 책임은 드림(주)에
        있습니다.
      </Responsibility>
    </>
  );
}

const GuaranteeType = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const Contents = styled.div``;
const Title = styled.div`
  font-size: 13px;
  font-weight: 600;
`;

const Description = styled.div`
  margin-top: 2px;
  line-height: 16px;
  font-size: 13px;
  color: rgba(34, 34, 34, 0.5);
`;

const Responsibility = styled.div`
  margin-top: 20px;
  padding-top: 40px;
  line-height: 16px;
  border-top: 1px solid #f0f0f0;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`;

export default Guarantee;

const GUARANTEE_DATA = [
  {
    image: guaranteeImg1,
    title: '100% 정품 보증',
    description:
      'DREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다.',
  },
  {
    image: guaranteeImg2,
    title: '엄격한 다중 검수',
    description:
      '모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다.',
  },
  {
    image: guaranteeImg3,
    title: '정품 인증 패키지',
    description:
      '검수에 합격한 경우에 한하여 DREAM의 정품 인증 패키지가 포함된 상품이 배송됩니다.',
  },
];
