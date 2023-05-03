import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchModal from './SearchModal';
import styled from 'styled-components';
import logoImg from '../../assets/dreamLogo.png';

function MainHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  function goToLogin() {
    navigate('/login');
  }

  const showModal = e => {
    setModalOpen(true);
    e.preventDefault();
  };
  return (
    <HeaderWrap>
      <HeaderTop>
        <TopUl>
          <TopLi>고객센터</TopLi>
          <TopLi>관심상품</TopLi>
          <TopLi onClick={goToLogin}>{token ? '로그아웃' : '로그인'}</TopLi>
        </TopUl>
      </HeaderTop>
      <div>
        <HeaderMain>
          <Logo
            logoImg={logoImg}
            onClick={() => {
              navigate('/');
            }}
          />
          <MainUl>
            <MainLi weight>
              <LinkTag to="/">HOME</LinkTag>
            </MainLi>
            <MainLi>
              <LinkTag to="/interestProduct">LIKE</LinkTag>
            </MainLi>
            <MainLi>
              <LinkTag to="/" onClick={showModal}>
                SEARCH
              </LinkTag>
              {modalOpen && <SearchModal setModalOpen={setModalOpen} />}
            </MainLi>
          </MainUl>
        </HeaderMain>
        <MainCategory>
          <CategoryUl>
            {CATEGORY.map(({ id, text }) => {
              return (
                <CategoryLi key={id}>
                  <LinkS to="#">{text}</LinkS>
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
  width: 100%;
  height: 161px;
  position: sticky;
  top: -45px;
  margin: 0 auto;
  background-color: white;
  z-index: 2;
`;
const HeaderTop = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: 19px;
  padding-right: 79px;
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
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 25px 80px 20px;
  align-items: center;
`;

const Logo = styled.div`
  width: 130px;
  height: 30px;
  background-image: ${({ logoImg }) => `url(${logoImg})`};
  background-size: contain;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`;

const MainUl = styled(TopUl)``;

const MainLi = styled.li`
  padding: 5px 10px;
  font-size: 18px;
  font-weight: ${props => (props.weight ? '700' : '400')};
`;

const LinkTag = styled(Link)`
  color: #222222;
  text-decoration: none;
`;
const MainCategory = styled.div`
  display: flex;
  justify-content: start;
  box-shadow: 0 1px 0 0 rgba(1, 1, 1, 0.2);
`;
const CategoryUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 60px 10px;
  cursor: pointer;
`;
const CategoryLi = styled.li`
  padding: 5px 20px;
  font-size: 18px;
`;
const LinkS = styled(Link)`
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
