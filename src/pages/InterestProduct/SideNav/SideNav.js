import React from 'react';
import styled from 'styled-components';

function SideNav() {
  return (
    <SideNavContainer>
      <SideNavHeader>마이 페이지</SideNavHeader>
      <ShoppingInfoContainer>
        <ShoppingInfoTitle>쇼핑 정보</ShoppingInfoTitle>
        <ShoppingInfo>
          {SHOPPING_INFO.map(data => {
            return (
              <ShoppingInfoList key={data.id} id={data.id}>
                {data.list}
              </ShoppingInfoList>
            );
          })}
          <ShoppingInfoList />
        </ShoppingInfo>
      </ShoppingInfoContainer>
      <div>
        <MyInfoTItle>내 정보</MyInfoTItle>
        <MyInfo>
          {MY_INFO.map(data => {
            return <MyInfoList key={data.id}>{data.list}</MyInfoList>;
          })}
        </MyInfo>
      </div>
    </SideNavContainer>
  );
}

const SideNavContainer = styled.div`
  margin-right: 100px;
`;

const SideNavHeader = styled.div`
  line-height: 29px;
  padding-bottom: 30px;
  font-size: 24px;
  font-weight: 600;
`;

const ShoppingInfoContainer = styled.div`
  margin-bottom: 35px;
`;

const ShoppingInfoTitle = styled.div`
  line-height: 22px;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 600;
`;

const ShoppingInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ShoppingInfoList = styled.li`
  line-height: 18px;
  font-size: 15px;
  font-weight: ${({ id }) => (id === 4 ? 600 : 400)};
  color: ${({ id }) => (id === 4 ? '#222222' : 'rgba(34, 34, 34, 0.5);')};
`;

const MyInfoTItle = styled.div`
  line-height: 22px;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 600;
`;

const MyInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MyInfoList = styled.li`
  line-height: 18px;
  font-size: 15px;
  color: rgba(34, 34, 34, 0.5);
`;

export default SideNav;

const SHOPPING_INFO = [
  { id: 1, list: '구매 내역' },
  { id: 2, list: '판매 내역' },
  { id: 3, list: '보관 판매' },
  { id: 4, list: '관심 상품' },
];

const MY_INFO = [
  { id: 1, list: '프로필 정보' },
  { id: 2, list: '주소록' },
  { id: 3, list: '결제 정보' },
  { id: 4, list: '판매 정산 계좌' },
  { id: 5, list: '현금영수증 정보' },
  { id: 6, list: '포인트' },
];
