import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import MainImg from './components/MainImg';
import CategoryBtn from './components/CategoryBtn';
import FilterBar from './components/FilterBar';
import Product from './components/Product';
import styled from 'styled-components';

function Main() {
  const [mainImage, setMainImage] = useState([]);
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);

  //TODO : 통신 안 할때 쓸 moc데이터 입니다.
  // const [moc, setMoc] = useState([]);
  // useEffect(() => {
  //   fetch('/data/mainMockData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setMoc(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch('/data/mainImg.json')
      .then(res => res.json())
      .then(data => {
        setMainImage(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://10.58.52.65:3000/products?limit=10&offset=${offset}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
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
      <MainHeader />
      <MainImg mainImage={mainImage} id={mainImage.id} url={mainImage.url} />

      <CategoryMapDiv>
        {CATEGORY.map(({ id, text }) => {
          return <CategoryBtn key={id} id={id} text={text} />;
        })}
      </CategoryMapDiv>

      <MainContentsWrap>
        <FilterBar />
        <Contents>
          <MainContentsTop>
            <ItemNum>상품 10,000</ItemNum>
            <ItemSelect name="">
              {RIGHT_CATEGORY.map(({ id, text }) => {
                return (
                  <ItemOption key={id} name={id} value={text}>
                    {text}
                  </ItemOption>
                );
              })}
            </ItemSelect>
          </MainContentsTop>
          <ProductsMapDiv>
            {products?.map(
              ({
                productId,
                productImage,
                productName,
                productOriginalPrice,
                productModelNumber,
                premiumPercent,
                likeCount,
                reviewCount,
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
  margin-left: auto;
  margin-right: auto;
`;

const CategoryMapDiv = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3px;
  margin: 0 auto;
  padding: 40px 0 85px 0;
  border-bottom: 1px solid rgba(188, 188, 188, 0.5);
  align-items: center;
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
  { id: 1, text: 'POINT QUIZ' },
  { id: 2, text: 'BEST' },
  { id: 3, text: 'NEW' },
  { id: 4, text: 'EVENT' },
];

const RIGHT_CATEGORY = [
  { id: 0, text: '선택', endpoint: '' },
  { id: 1, text: '좋아요 순', endpoint: 'like' },
  { id: 2, text: '리뷰순', endpoint: 'review' },
  {
    id: 3,
    text: '즉시판매가',
    endpoint: '&sort=immediatesellprice&sortorder=asc',
  },
  {
    id: 4,
    text: '즉시구매가',
    endpoint: '&sort=immediatebuyprice&sortorder=desc',
  },
  {
    id: 5,
    text: '프리미엄 가격 높은 순',
    endpoint: '&sort=premium&sortorder=desc',
  },
  {
    id: 6,
    text: '프리미엄 가격 낮은 순',
    endpoint: '&sort=premium&sortorder=asc',
  },
];
