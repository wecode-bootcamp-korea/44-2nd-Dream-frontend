import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import MainImg from './components/MainImg';
import CategoryBtn from './components/CategoryBtn';
import FilterBar from './components/FilterBar';
import Product from './components/Product';
import styled from 'styled-components';

function Main() {
  const [mainImage, setMainImage] = useState([]);
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [dropDownId, setDropDownId] = useState(0);
  const [categoryTitle, setCategoryTitle] = useState('');
  const [categoryNum, setCategoryNum] = useState('');

  const optionValue = RIGHT_CATEGORY.filter(
    list => list.id === Number(dropDownId)
  )[0]?.value;

  const sortOrderValue = RIGHT_CATEGORY.filter(
    list => list.id === Number(dropDownId)
  )[0]?.sortOrderValue;

  const sortLimitOffset = `limit=${products.length}&offset=0`;
  const limitOffsetUrl = `limit=10&offset=${offset}`;
  const sortUrl = `&sort=${optionValue}`;
  const sortOrderUrl = `&sortorder=${sortOrderValue}`;
  const categoryUrl = `&${categoryTitle}=${categoryNum}`;

  //Main Image 목데이터 fetch
  useEffect(() => {
    fetch('/data/mainImg.json')
      .then(res => res.json())
      .then(data => {
        setMainImage(data);
      });
  }, []);

  //TODO : 필터 정렬 fetch
  useEffect(() => {
    fetch(
      `http://10.58.52.75:3000/products?${sortLimitOffset}${sortUrl}${sortOrderUrl}${categoryUrl}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(response => response.json())
      .then(item => {
        setProducts(item);
      });
  }, [dropDownId, categoryTitle, categoryNum]);

  //TODO : 무한 스크롤 fetch
  useEffect(() => {
    fetch(
      `http://10.58.52.75:3000/products?${limitOffsetUrl}${sortUrl}${sortOrderUrl}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(response => response.json())
      .then(item => {
        setProducts(prev => prev.concat(item));
      });

    window.addEventListener('scroll', handleScroll);
  }, [offset]);

  const handleScroll = e => {
    const num = e.target.documentElement.scrollTop;
    if (
      window.innerHeight + num >=
      e.target.documentElement.scrollHeight - 200
    ) {
      setOffset(offset + 10);
    }
  };

  return (
    <MainWrap>
      <MainImageBox>
        <MainImg mainImage={mainImage} id={mainImage.id} url={mainImage.url} />
        <CategoryMapDiv>
          {CATEGORY.map(({ id, text }) => {
            return <CategoryBtn key={id} id={id} text={text} />;
          })}
        </CategoryMapDiv>
      </MainImageBox>

      <MainContentsWrap>
        <FilterBar
          setCategoryTitle={setCategoryTitle}
          setCategoryNum={setCategoryNum}
        />
        <Contents>
          <MainContentsTop>
            <ItemNum>상품 2,000</ItemNum>
            <ItemSelect name="" onChange={e => setDropDownId(e.target.value)}>
              {RIGHT_CATEGORY.map(({ id, title }) => {
                return (
                  <ItemOption key={id} name={id} value={id}>
                    {title}
                  </ItemOption>
                );
              })}
            </ItemSelect>
          </MainContentsTop>
          <ProductsMapDiv>
            {products?.length > 0 &&
              products.map(
                ({
                  productId,
                  productImage,
                  productName,
                  productOriginalPrice,
                  productModelNumber,
                  premiumPercent,
                  likeCount,
                  reviewCount,
                  productLevel,
                  productAge,
                }) => {
                  return (
                    <Product
                      key={productId}
                      id={productId}
                      url={productImage}
                      title={productName}
                      price={productOriginalPrice}
                      productNum={productModelNumber}
                      likeCount={likeCount}
                      reviewCount={reviewCount}
                      productLevel={productLevel}
                      productAge={productAge}
                      percent={Math.floor(premiumPercent).toFixed(2)}
                    />
                  );
                }
              )}
          </ProductsMapDiv>
        </Contents>
      </MainContentsWrap>
    </MainWrap>
  );
}

const MainWrap = styled.div`
  margin: auto 0 auto;
`;

const MainImageBox = styled.div`
  border-bottom: 1px solid rgba(188, 188, 188, 0.5);
`;

const CategoryMapDiv = styled.div`
  max-width: 1300px;
  display: flex;
  margin: 0 auto;
  padding: 40px 0 85px 0;
  flex-wrap: 1 1 240px;
  align-items: center;
  /* border-bottom: 1px solid rgba(188, 188, 188, 0.5); */
`;

const MainContentsWrap = styled.div`
  display: flex;
  justify-content: baseline;
  width: 90vw;
  height: 100vh;
`;

const Contents = styled.div`
  width: 75vw;
  padding: 10px;
`;

const MainContentsTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 23px 0;
  padding: 5px 10px;
  align-items: center;
`;

const ItemNum = styled.p`
  font-size: 17px;
  padding-left: 60px;
`;
const ItemSelect = styled.select`
  width: 160px;
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(188, 188, 188, 0.2);
  color: gray;
  appearance: none;
  font-size: 15px;

  &:hover {
    border: 1px solid rgba(188, 188, 188, 0.5);
    color: black;
  }
`;

const ItemOption = styled.option`
  font-size: 15px;
  text-align: center;
`;

const ProductsMapDiv = styled(MainWrap)`
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
  padding-left: 80px;
`;

export default Main;
const CATEGORY = [
  { id: 5, text: 'POINT QUIZ' },
  { id: 6, text: 'BEST' },
  { id: 7, text: 'NEW' },
  { id: 8, text: 'EVENT' },
];
const RIGHT_CATEGORY = [
  { id: 0, title: '선택', value: '', sortOrderValue: '' },
  { id: 1, title: '좋아요 순', value: 'like', sortOrderValue: 'desc' },
  { id: 2, title: '리뷰순', value: 'review', sortOrderValue: 'desc' },
  {
    id: 3,
    title: '즉시판매가',
    value: 'immediatesellprice',
    sortOrderValue: 'asc',
  },
  {
    id: 4,
    title: '즉시구매가',
    value: 'immediatebuyprice',
    sortOrderValue: 'desc',
  },
  {
    id: 5,
    title: '프리미엄 가격 높은 순',
    value: 'premium',
    sortOrderValue: 'desc',
  },
  {
    id: 6,
    title: '프리미엄 가격 낮은 순',
    value: 'premium',
    sortOrderValue: 'asc',
  },
];
