import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import DropZone from './DropZone/DropZone';
import ReviewList from './ReviewList/ReviewList';
import { api } from '../../../api';

function PhotoReview({
  reviewModalWindow,
  openReviewModal,
  closeReviewModal,
  file,
  textAreaValue,
  setFile,
  setTextAreaValue,
  reviewSubmit,
  detailData,
  paramsId,
}) {
  const token = localStorage.getItem('token');
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`${api.review}?productId=${paramsId}`)
      .then(response => response.json())
      .then(result => {
        setReviewData(result);
      });
  };

  function reviewSubmit() {
    const formData = new FormData();
    formData.append('productId', detailData.productId);
    formData.append('reviewImg', file);
    formData.append('title', 'review');
    formData.append('content', textAreaValue);
    fetch(`${api.review}`, {
      headers: {
        Accpet: 'application/json',
        Authorization: token,
      },
      method: 'POST',
      cache: 'no-cache',
      body: formData,
    }).then(response => {
      if (response.status === 201) {
        fetchData();
      }
    });
  }

  function removeReview(reviewId) {
    fetch(`${api.review}/${reviewId}`, {
      headers: {
        Accpet: 'application/json',
        Authorization: token,
      },
      method: 'DELETE',
    }).then(response => {
      if (response.status === 200) {
        fetchData();
      }
    });
  }

  return (
    <ReviewContainer>
      <ReviewHeader>
        <FlexStart>
          <ReviewText>홈데코</ReviewText>
          <PostsNumber>{reviewData.length}</PostsNumber>
        </FlexStart>
        <FlexEnd
          onClick={() => {
            openReviewModal();
          }}
        >
          <PlusIcon>+</PlusIcon>
          <ButtonText>사진 올리기</ButtonText>
        </FlexEnd>
      </ReviewHeader>
      <ReviewContents>
        <ReviewListContainer>
          {reviewData.map((data, i) => {
            return (
              <ReviewList key={i} data={data} removeReview={removeReview} />
            );
          })}
        </ReviewListContainer>
      </ReviewContents>
      {reviewModalWindow && (
        <DropZone
          file={file}
          setFile={setFile}
          closeReviewModal={closeReviewModal}
          textAreaValue={textAreaValue}
          setTextAreaValue={setTextAreaValue}
          reviewSubmit={reviewSubmit}
          detailData={detailData}
        />
      )}
    </ReviewContainer>
  );
}
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
`;

const FlexStart = styled.div`
  display: flex;
`;

const ReviewText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;

const PostsNumber = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const FlexEnd = styled.div`
  display: flex;
  padding: 11px 10px 10px 10px;
  border-radius: 10px;
  background-color: #222222;
  color: #fafafa;
  &:hover {
    cursor: pointer;
  }
`;

const PlusIcon = styled.div`
  margin-right: 10px;
  font-size: 14px;
  font-weight: 400;
`;

const ButtonText = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const ReviewContents = styled.div`
  width: 1200px;
`;

const ReviewListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px 20px;
  margin: 25px 0;
`;

export default PhotoReview;
