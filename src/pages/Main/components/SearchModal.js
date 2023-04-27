import React from 'react';
import Clock from 'react-live-clock';
import styled from 'styled-components';

function SearchModal() {
  return (
    <Total>
      <SearchWrap>
        <SearchInputWrap>
          <SearchInput
            type="search"
            value=""
            placeholder="제품명, 모델명, 모델번호 등"
          />
          <InputBtn>✕</InputBtn>
        </SearchInputWrap>
      </SearchWrap>

      <SearchContentTop>
        <SearchContentWrap>
          <RecommendTitleBox>
            <RecommendTitle>추천 검색어</RecommendTitle>
          </RecommendTitleBox>
          <div>
            {RECOMMEND.map(({ id, title }) => {
              return <RecommendWordBtn key={id}>{title}</RecommendWordBtn>;
            })}
          </div>
        </SearchContentWrap>
      </SearchContentTop>
      <SearchContentCenter>
        <SearchContentTitle>
          <Title>인기 검색어</Title>
          <DateText>
            <Clock
              format="MM.DD HH:mm:ss"
              ticking={true}
              timezone="KR/Pacific"
            />
          </DateText>
        </SearchContentTitle>
        <SearchContentWords>
          <SearchUl>
            {POPULAR.map(({ id, title }) => {
              return (
                <SearchLiBox key={id}>
                  <SearchLi>
                    <ListNum>{id}</ListNum>
                    <ListText>{title}</ListText>
                  </SearchLi>
                </SearchLiBox>
              );
            })}
          </SearchUl>
        </SearchContentWords>
      </SearchContentCenter>
    </Total>
  );
}

const Total = styled.div`
  width: 100%;
  height: 100%;
`;

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px 0 0;
`;

const SearchInputWrap = styled.div`
  border-bottom: 3px solid #000;
  padding: 0 0 15px;
`;

const SearchInput = styled.input`
  width: 800px;
  height: 45px;
  padding: 0 10px 0;
  margin-right: 20px;
  border: none;

  &::placeholder {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    color: rgba(189, 189, 189, 0.7);
  }
`;

const InputBtn = styled.button`
  width: 25px;
  height: 25px;
  padding: 5px 8px;
  border: none;
  border-radius: 60%;
  background-color: rgb(244, 244, 244);
  font-size: 13px;
  text-align: center;
  color: rgb(83, 83, 83);
  cursor: pointer;
`;

const RecommendTitleBox = styled.div`
  padding-bottom: 20px;
`;

const RecommendTitle = styled.span`
  padding: 0 0 0 5px;
  font-size: 17px;
  font-weight: 700;
`;

const RecommendWordBtn = styled.button`
  width: fit-content;
  padding: 8px 12px;
  margin: 0 4px;
  border: 1px solid #ebebeb;
  border-radius: 20px;
  background: #f4f4f4;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.8);
`;

const SearchContentTop = styled.div`
  width: 845px;
  margin: 20px auto;
`;

const SearchContentWrap = styled.div`
  padding-bottom: 40px;
`;

const SearchContentCenter = styled.div`
  width: 845px;
  margin: 0 auto;
`;

const SearchContentTitle = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: flex-end;
  padding-bottom: 12px;
  width: 845px;
`;

const Title = styled.div`
  padding: 0 0 0 5px;
  font-size: 17px;
  font-weight: 700;
`;

const DateText = styled.p`
  display: flex;
  justify-content: baseline;
  padding-left: 10px;
  font-size: 17px;
  font-weight: 300;
  color: black;
`;

const SearchContentWords = styled.div`
  width: 845px;
  height: 400px;
`;

const SearchLiBox = styled.div`
  width: 350px;
  padding: 20px 0;
  display: flex;
  justify-content: flex-start;
`;

const SearchUl = styled.ul`
  column-count: 2;
  /* list-style-type: decimal; */
`;

const SearchLi = styled.li`
  display: flex;
  justify-content: baseline;
  align-items: center;
`;

const ListText = styled.p`
  font-size: 15px;
`;

const ListNum = styled.p`
  padding: 0 6px;
  font-size: 16px;
  font-weight: 600;
`;

export default SearchModal;

const RECOMMEND = [
  { id: 1, title: '빈티지 자동차' },
  { id: 2, title: '한정판' },
  { id: 3, title: '해리 포터' },
  { id: 4, title: '랜드로버 디펜더 90' },
  { id: 5, title: '클래식' },
];

const POPULAR = [
  { id: 1, title: '인기검색어 1' },
  { id: 2, title: '인기검색어 2' },
  { id: 3, title: '인기검색어 3' },
  { id: 4, title: '인기검색어 4' },
  { id: 5, title: '인기검색어 5' },
  { id: 6, title: '인기검색어 6' },
  { id: 7, title: '인기검색어 7' },
  { id: 8, title: '인기검색어 8' },
  { id: 9, title: '인기검색어 9' },
  { id: 10, title: '인기검색어 10' },
  { id: 11, title: '인기검색어 11' },
  { id: 12, title: '인기검색어 12' },
  { id: 13, title: '인기검색어 13' },
  { id: 14, title: '인기검색어 14' },
  { id: 15, title: '인기검색어 15' },
  { id: 16, title: '인기검색어 16' },
  { id: 17, title: '인기검색어 17' },
  { id: 18, title: '인기검색어 18' },
  { id: 19, title: '인기검색어 19' },
  { id: 20, title: '인기검색어 20' },
];
