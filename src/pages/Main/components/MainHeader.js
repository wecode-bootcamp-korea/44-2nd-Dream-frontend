import React, { useState } from 'react';
import SearchModal from './SearchModal';
import styled from 'styled-components';

function MainHeader() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = e => {
    setModalOpen(true);
    e.preventDefault();
  };

  return (
    <HeaderWrap>
      {modalOpen && <SearchModal setModalOpen={setModalOpen} />}
      <HeaderTop>
        <TopUl>
          <TopLi>고객센터</TopLi>
          <TopLi>관심상품</TopLi>
          <TopLi>로그인</TopLi>
        </TopUl>
      </HeaderTop>
      <div>
        <HeaderMain>
          <Logo>DREAM</Logo>
          <MainUl>
            <MainLi weight>
              <HomeLink href="/">HOME</HomeLink>
            </MainLi>
            <MainLi>LIKE</MainLi>
            <MainLi onClick={showModal}>SEARCH</MainLi>
            {modalOpen && <SearchModal setModalOpen={setModalOpen} />}
          </MainUl>
        </HeaderMain>
        <MainCategory>
          <CategoryUl>
            {CATEGORY.map(({ id, text }) => {
              return (
                <CategoryLi key={id}>
                  <Link href="#">{text}</Link>
                </CategoryLi>
              );
            })}
          </CategoryUl>
        </MainCategory>
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  width: 100vw;
  height: auto;
  position: sticky;
  top: -40px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  z-index: 2;
`;

const HeaderTop = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  padding-right: 30px;
`;

const HomeLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const TopUl = styled.ul`
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`;

const TopLi = styled.li`
  padding: 5px 10px;
  color: gray;
  font-size: 13px;
`;

const HeaderMain = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 38px 10px 20px;
  align-items: center;
`;

const Logo = styled.h1`
  padding: 0 40px;
  font-size: 30px;
  font-weight: 900;
  font-style: italic;
`;

const MainUl = styled(TopUl)`
  padding-right: 20px;
`;

const MainLi = styled.li`
  padding: 5px 10px;
  font-size: 18px;
  font-weight: ${props => (props.weight ? '700' : '350')};
`;

const MainSearch = styled.div`
  padding: 5px 10px;
  font-size: 18px;
`;

const MainCategory = styled.div`
  display: flex;
  justify-content: start;
  box-shadow: 0 1px 0 0 rgba(1, 1, 1, 0.2);
`;
const CategoryUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 40px;
  cursor: pointer;
`;
const CategoryLi = styled.li`
  padding: 5px 20px;
  font-size: 18px;
`;
const Link = styled.a`
  color: inherit;
  text-decoration: none;
  transition: 0.25s ease;
  &:hover {
    color: inherit;
    box-shadow: 0 3px 0 0 black;
  }
`;

export default MainHeader;

const CATEGORY = [
  { id: 1, text: 'Total' },
  { id: 2, text: 'Basic' },
  { id: 3, text: 'Car' },
  { id: 4, text: 'Movie' },
  { id: 5, text: 'Building' },
];
