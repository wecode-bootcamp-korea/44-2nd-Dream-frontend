import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/dreamLogo.png';

function Footer() {
  return (
    <FooterBox>
      <FooterContent>
        <ListBox>
          <ListTitle>이용 안내</ListTitle>
          <ListContent>검수 기준</ListContent>
          <ListContent>이용 정책</ListContent>
          <ListContent>페널티 정책</ListContent>
          <ListContent>커뮤니티 가이드라인</ListContent>
        </ListBox>
        <ListBox>
          <ListTitle>고객 지원</ListTitle>
          <ListContent>공지사항</ListContent>
          <ListContent>서비스 소개</ListContent>
          <ListContent>쇼룸 안내</ListContent>
          <ListContent>판매자 방문접수</ListContent>
        </ListBox>
        <CustomerService>
          <CenterNumber>고객센터 1588-7813</CenterNumber>
          <HoursOfOperation>
            운영시간 평일 11:00 - 18:00 (토 • 일, 공휴일 휴뮤)
          </HoursOfOperation>
          <HoursOfOperation>점심시간 평일 13:00 - 14:00</HoursOfOperation>
          <Inquires>1:1 문의하기는 앱에서만 가능합니다.</Inquires>
          <LogoImg src={logoImage} />
        </CustomerService>
      </FooterContent>
    </FooterBox>
  );
}

const FooterBox = styled.div`
  width: 100%;
  height: 250px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 40px 80px 10px;
`;

const FooterContent = styled.div`
  display: flex;
`;

const ListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-right: 100px;
`;

const ListTitle = styled.li`
  font-size: 16px;
  font-weight: 600;
`;

const ListContent = styled.li`
  font-size: 14px;
  color: rgba(34, 34, 34, 0.5);
`;

const CustomerService = styled.div`
  flex-grow: 1;
  text-align: right;
`;

const CenterNumber = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const HoursOfOperation = styled.div`
  font-size: 13px;
  color: rgba(34, 34, 34, 0.5);
  line-height: 20px;
`;

const Inquires = styled.div`
  font-size: 13px;
  color: #222222;
  margin-top: 10px;
`;

const LogoImg = styled.img`
  width: 150px;
  margin-top: 40px;
`;

export default Footer;
