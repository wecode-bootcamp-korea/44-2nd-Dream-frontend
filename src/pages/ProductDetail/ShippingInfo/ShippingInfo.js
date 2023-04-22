import React from 'react';
import styled from 'styled-components';
import boxImg from '../../../assets/productdetail/a_8b54cbca40e945f4abf1ee24bdd031f7.png';
import storageImg from '../../../assets/productdetail/a_f82951f1984b404db30b9c4fca4bd695.png';
import bannerImg from '../../../assets/productdetail/eventbanner.png';

function SippingInfo() {
  return (
    <div>
      <Title>배송 정보</Title>
      <DeliveryType>
        <Image src={boxImg} alt="배송이미지" />
        <Contents>
          <Type>일반배송 3,000원</Type>
          <Description>검수 후 배송 5-7일 내 도착 예정</Description>
        </Contents>
      </DeliveryType>
      <HorizontalLine />
      <DeliveryType>
        <Image src={storageImg} alt="배송이미지" />
        <Contents>
          <Type>창고보관 첫 30일 무료</Type>
          <Description>배송 없이 창고에 보관 • 빠르게 판매 가능</Description>
        </Contents>
      </DeliveryType>
      <Banner />
    </div>
  );
}

const Title = styled.div`
  margin-top: 40px;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.8);
`;

const DeliveryType = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const Contents = styled.div`
  flex-grow: 1;
`;

const Type = styled.div`
  font-size: 15px;
`;

const Description = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.5);
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid #f0f0f0;
`;

const Banner = styled.div`
  margin: 30px 0;
  width: 560px;
  height: 80px;
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;
`;

export default SippingInfo;
