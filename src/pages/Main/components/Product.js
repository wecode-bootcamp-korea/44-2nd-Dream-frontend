import React, { useState } from 'react';
import { CiBookmark, CiMemoPad } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Product({
  id,
  url,
  categoryName,
  title,
  price,
  productNum,
  percent,
  likeCount,
  reviewCount,
  productOriginalPrice,
  productLevel,
  productAge,
}) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${id}`);
  };

  const goToInterest = () => {
    navigate('/interestProduct');
  };

  return (
    <ProductsBox>
      <ProductWrap>
        <div
          onClick={() => {
            goToDetail(id);
          }}
        >
          <ImgWrap>
            <Img src={url} alt="img" />
          </ImgWrap>

          <TextWrap>
            <Title>{title}</Title>
            <ProductNum> No. {productNum}</ProductNum>
            <PriceBox>
              <Price>{Math.floor(price).toLocaleString()}</Price>
              <PremiumValue percentActive={percent}>{percent}%</PremiumValue>
              {/* <OriginalPrice>{productOriginalPrice}</OriginalPrice> */}
            </PriceBox>
          </TextWrap>
        </div>

        <ButtonWrap>
          <BookmarkWrap>
            <CiBookmark />
            <LikeCount onClick={goToInterest}>{likeCount}</LikeCount>
          </BookmarkWrap>
          <ReviewWrap>
            <CiMemoPad />
            <ReviewCount>{reviewCount}</ReviewCount>
          </ReviewWrap>
        </ButtonWrap>
      </ProductWrap>
    </ProductsBox>
  );
}

const ProductsBox = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 270px;
  cursor: pointer;
`;

const ProductWrap = styled.div`
  width: 270px;
  height: 430px;
  padding: 20px 10px;
`;

const ImgWrap = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  object-position: center;
  /* border-radius: 10px; */
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 7px 0;
  padding: 0 5px;
  font-size: 14px;
  line-height: 16px;
`;

const Title = styled.p`
  margin: 10px 0px 0px;
  font-size: 17px;
  word-break: keep-all;
  line-height: 2em;
  font-weight: 700;
`;

const ProductNum = styled.p`
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 6px;
  color: #777;
  /* line-height: 16px;
  font-size: 13px;
  letter-spacing: -0.07px;
  font-weight: 700;
  color: #333; */
`;

const PriceBox = styled.div`
  width: 230px;
  margin: 5px 0 3px;
  display: flex;
  justify-content: start;
  justify-content: space-between;
`;

const Price = styled.p`
  /* display: flex; */
  /* align-items: center; */
  /* height: 30px;
  line-height: 17px;
  font-size: 14px;
  font-weight: 700; */
  width: 70px;
  font-size: 17px;
  font-weight: 700;
  color: #333;
  /* margin-right: 4px; */
  /* margin: 10px 0 8px 0; */
  /* padding: 5px 10px; */
`;

const PremiumValue = styled.div`
  /* position: absolute;
  top: 13px;
  right: 13px; */
  width: 35px;
  font-size: 13px;
  font-weight: 700;
  color: ${({ percentActive }) => (percentActive > 0 ? '#41B979' : '#EE6153')};
`;

// const OriginalPrice = styled.p``;

const ButtonWrap = styled.div`
  display: flex;
`;

const BookmarkWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: rgba(34, 34, 34, 0.5);
  font-size: 20px;
`;

const LikeCount = styled.p`
  display: flex;
  align-items: center;
  padding: 0 5px 0 0;
  font-size: 12px;
`;

const ReviewWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 4px;
  color: rgba(34, 34, 34, 0.5);
  font-size: 20px;
`;

const ReviewCount = styled.p`
  display: flex;
  align-items: center;
  padding: 0 0 0 5px;
  font-size: 12px;
`;

export default Product;
