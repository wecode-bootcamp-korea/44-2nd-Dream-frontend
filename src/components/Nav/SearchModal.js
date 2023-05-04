import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Clock from 'react-live-clock';
import useDebounce from '../../pages/Main/Debounce';
import styled from 'styled-components';

function SearchModal({ setModalOpen }) {
  const [search, setSearch] = useState('');
  const [wordData, setWordData] = useState([]);
  const [innerModal, setInnerModal] = useState(false);

  const debounceValue = useDebounce(search);

  const closeModal = () => {
    setModalOpen(false);
  };

  const outside = useRef();

  const searchHandler = e => {
    setSearch(e.target.value);
  };

  const navigate = useNavigate();

  const goToDetail = productId => {
    navigate(`/detail/${productId}`);
  };

  //TODO : 검색어 단어 fetch
  useEffect(() => {
    fetch(
      `http://10.58.52.75:3000/search?limit=10&offset=0&keyword=${debounceValue}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response === !response.ok) {
          alert('다시 한번 시도해 보세요!');
        }
      })
      .then(data => {
        setWordData(data);
      });
  }, [debounceValue]);

  //TODO : 인기 검색어 fetch
  const [hotTopics, setHotTopics] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.75:3000/search/hottopics', {
      method: 'GET',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        setHotTopics(data);
      });
  }, [wordData]);

  return (
    <Total
      ref={outside}
      onClick={e => {
        if (e.target === outside.current) {
          setInnerModal(false);
        }
      }}
    >
      <div>
        <CloseBtnWrap>
          <CloseBtn onClick={closeModal}>✕</CloseBtn>
        </CloseBtnWrap>
        <SearchWrap>
          <SearchInputWrap>
            <SearchInput
              name="search"
              type="search"
              value={search}
              placeholder="제품명, 모델명, 모델번호 등"
              onClick={() => setInnerModal(true)}
              onChange={searchHandler}
            />
          </SearchInputWrap>
        </SearchWrap>
      </div>

      <TotalWrap>
        {innerModal && (
          <SearchInnerWrap>
            <SearchMenu>
              <SearchMenuText>해당 검색어</SearchMenuText>
            </SearchMenu>
            <SearchBox>
              <SearchProductLink>
                {search.length !== 0
                  ? wordData?.map(
                      ({
                        productId,
                        productImage,
                        productName,
                        productModelNumber,
                      }) => {
                        return (
                          <SearchBox
                            key={productId}
                            onClick={() => goToDetail(productId)}
                          >
                            <SearchContents>
                              <ImageBox>
                                <SearchImg src={productImage} />
                              </ImageBox>
                              <TextBox>
                                <SearchText>{productName}</SearchText>
                                <ProductNum>{productModelNumber}</ProductNum>
                              </TextBox>
                            </SearchContents>
                          </SearchBox>
                        );
                      }
                    )
                  : ''}
              </SearchProductLink>
            </SearchBox>
          </SearchInnerWrap>
        )}

        <SearchContentBox>
          <SearchContentWrap>
            <RecommendTitleBox>
              <RecommendTitle>추천 검색어</RecommendTitle>
            </RecommendTitleBox>

            <div />
            {RECOMMEND.map(({ id, title }) => {
              return <RecommendWordBtn key={id}>{title}</RecommendWordBtn>;
            })}
          </SearchContentWrap>
        </SearchContentBox>
        <SearchContentCenter>
          <SearchContentTitle>
            <Title>인기 검색어</Title>
            <DateText>
              <Clock format="MM.DD HH:mm" ticking={true} />
            </DateText>
            <ClockText>한시간 기준</ClockText>
          </SearchContentTitle>
          <SearchContentWords>
            <SearchUl>
              {hotTopics?.map((name, i) => {
                return (
                  <SearchLiBox key={i}>
                    <SearchLi>
                      <ListNum>{i + 1}</ListNum>
                      <ListText>{name}</ListText>
                    </SearchLi>
                  </SearchLiBox>
                );
              })}
            </SearchUl>
          </SearchContentWords>
        </SearchContentCenter>
      </TotalWrap>
    </Total>
  );
}

const Total = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 1200px;
  inset: 0;
  background-color: white;
`;

const CloseBtnWrap = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
`;

const CloseBtn = styled.button`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 20px;
  right: 30px;
  background-color: white;
  border: none;
  font-size: 20px;
  text-align: center;
  color: rgb(83, 83, 83, 0.5);
  cursor: pointer;
`;

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px 0 0;
  z-index: 5;
`;

const SearchInputWrap = styled.form`
  position: relative;
  border-bottom: 3px solid #000;
  padding: 0 0 5px;
`;

const SearchInput = styled.input`
  width: 820px;
  height: 45px;
  padding: 2px 5px 3px;
  border: none;

  &::placeholder {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    color: rgba(189, 189, 189, 0.7);
  }
`;

const TotalWrap = styled.div`
  width: 833px;
  margin: 0 auto;
`;

const SearchInnerWrap = styled.div`
  position: absolute;
  width: 833px;
  height: 100vh;
  padding: 0 5px;
  background-color: white;
`;

const SearchMenu = styled.div`
  width: 100%;
`;

const SearchMenuText = styled.p`
  width: 822px;
  font-weight: 700;
  padding: 0px 3px 3px;
  border-bottom: 1px solid #ebebeb;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.21px;
  color: #000;
`;

const SearchBox = styled.div`
  width: 822px;
  display: flex;
  border-bottom: 1px solid #ebebeb;
`;

const SearchProductLink = styled(Link)`
  text-decoration-line: none;
  color: black;
`;

const SearchContents = styled.div`
  display: flex;
  justify-content: baseline;
  width: 300px;
  height: 84px;
  padding: 7px 3px;
  cursor: pointer;
`;

const ImageBox = styled.div`
  margin-right: 10px;
  border-radius: 5px;
`;

const SearchImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background-color: black;
  object-fit: cover;
  object-position: center;
`;

const TextBox = styled.div`
  padding: 20px 0;
`;

const SearchText = styled.p`
  margin-bottom: 3px;
  font-size: 16px;
`;

const ProductNum = styled.p`
  font-size: 15px;
  color: rgba(34, 34, 34, 0.5);
`;

const SearchContentBox = styled.div`
  width: 845px;
  margin: 50px auto 20px;
`;

const SearchContentWrap = styled.div`
  padding-bottom: 20px;
`;

const RecommendTitleBox = styled.div`
  padding-bottom: 20px;
`;

const RecommendTitle = styled.span`
  padding: 0 0 0 5px;
  font-size: 16px;
  font-weight: 600;
`;

const RecommendWordBtn = styled.button`
  width: fit-content;
  padding: 8px 12px;
  margin: 0 4px;
  border: 1px solid #ebebeb;
  border-radius: 20px;
  background: #f4f4f4;
  font-size: 13px;
  color: rgba(34, 34, 34, 0.8);
`;

const SearchContentCenter = styled.div`
  width: 845px;
  margin: 80px auto;
`;

const SearchContentTitle = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  padding-bottom: 10px;
  width: 845px;
`;

const Title = styled.div`
  padding: 0 0 0 5px;
  font-size: 16px;
  font-weight: 600;
`;

const DateText = styled.p`
  display: flex;
  justify-content: baseline;
  width: 111px;
  padding-left: 11px;
  font-size: 14px;
  font-weight: 300;
  color: black;
`;

const ClockText = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

const SearchContentWords = styled.div`
  width: 845px;
`;

const SearchUl = styled.ul`
  width: 800px;
  column-count: 2;
  overflow: hidden;
`;

const SearchLiBox = styled.div`
  width: 350px;
  padding: 18px 0;
  display: flex;
  justify-content: flex-start;
`;
const SearchLi = styled.li`
  display: flex;
  justify-content: baseline;
  align-items: center;
`;

const ListNum = styled.p`
  padding: 0 6px;
  font-size: 15px;
  font-weight: 700;
`;

const ListText = styled.p`
  margin-left: 6px;
  font-size: 14px;
  font-weight: 400;
`;
export default SearchModal;

const RECOMMEND = [
  { id: 1, title: '빈티지 자동차' },
  { id: 2, title: '한정판' },
  { id: 3, title: '해리 포터' },
  { id: 4, title: '랜드로버 디펜더 90' },
  { id: 5, title: '클래식' },
];
