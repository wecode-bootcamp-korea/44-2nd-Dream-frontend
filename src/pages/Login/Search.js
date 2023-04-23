import React from 'react';
import styled from 'styled-components';
const Search = () => {
  return (
    <SearchAll>
      <span>회원가입</span>
      <span>이메일 찾기</span>
      <span> 비밀번호 찾기</span>
    </SearchAll>
  );
};
const SearchAll = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;

  span:nth-child(1) {
    width: 133px;

    display: flex;
    justify-content: center;
  }

  span:nth-child(2) {
    display: flex;
    width: 200px;
    border-right: 2px solid gray;
    border-left: 2px solid gray;

    justify-content: center;
  }

  span:nth-child(3) {
    width: 133px;
    display: flex;
    justify-content: center;
  }
`;
export default Search;
