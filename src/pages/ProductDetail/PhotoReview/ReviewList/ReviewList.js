import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import { BsTrash } from 'react-icons/bs';

function ReviewList({ data, removeReview }) {
  const [heartToggle, setHeartToggle] = useState(false);

  function handleHeartToggle() {
    setHeartToggle(prev => !prev);
  }

  return (
    <div>
      <ReviewImg image={data.reviewImageUrl} />
      <Container>
        <UserName>{data.userNickname}</UserName>
        <HeartContainer>
          <div onClick={handleHeartToggle}>
            {heartToggle ? <FullHeartButton /> : <EmptyHeartButton />}
          </div>
          <HeartNumber>
            {heartToggle
              ? data.likeNumber
                ? data.likeNumber + 1
                : 1
              : data.likeNumber
              ? data.likeNumber
              : ''}
          </HeartNumber>
        </HeartContainer>
        <Trash
          onClick={() => {
            removeReview(data.reviewId);
          }}
        />
      </Container>
      <ReviewContent>{data.reviewContent}</ReviewContent>
    </div>
  );
}

const ReviewImg = styled.div`
  width: 100%;
  height: 279px;
  margin-bottom: 16px;
  border-radius: 15px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const UserName = styled.div`
  font-weight: 600;
  flex-grow: 1;
`;

const Trash = styled(BsTrash)`
  text-align: right;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const HeartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 5px;
`;

const EmptyHeartButton = styled(IoMdHeartEmpty)`
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const FullHeartButton = styled(IoMdHeart)`
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const HeartNumber = styled.div``;

const ReviewContent = styled.div`
  width: 100%;
`;

export default ReviewList;
