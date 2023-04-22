import React, { useState } from 'react';
import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import DropZone from './DropZone/DropZone';
import ReviewList from './ReviewList/ReviewList';

function PhotoReview({ reviewModalWindow, openReviewModal, closeReviewModal }) {
  const [reviewData, setReviewData] = useFetch('/data/reviewData.json');
  const [file, setFile] = useState(null);
  const [textAreaValue, setTextAreaValue] = useState('');

  function handleUpload() {
    setReviewData([
      ...reviewData,
      {
        id: 7,
        image: `${URL.createObjectURL(file)}`,
        userName: 'youngwoon',
        likeNumber: '',
        content: textAreaValue,
      },
    ]);
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
          {reviewData.map(data => {
            return <ReviewList key={data.id} data={data} />;
          })}
        </ReviewListContainer>
      </ReviewContents>
      {reviewModalWindow && (
        <DropZone
          file={file}
          setFile={setFile}
          closeReviewModal={closeReviewModal}
          handleUpload={handleUpload}
          textAreaValue={textAreaValue}
          setTextAreaValue={setTextAreaValue}
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
