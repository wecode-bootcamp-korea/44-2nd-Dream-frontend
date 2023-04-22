import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';

function ReviewList({ data }) {
  const [heartToggle, setHeartToggle] = useState(false);

  function handleHeartToggle() {
    setHeartToggle(prev => !prev);
  }

  return (
    <div>
      <ReviewImg image={data.image} />
      <Container>
        <UserName>{data.userName}</UserName>
        <HeartContainer>
          <div onClick={handleHeartToggle}>
            {heartToggle ? <FullHeartButton /> : <EmptyHeartButton />}
          </div>
          <HeartNumber>
            {heartToggle ? data.likeNumber + 1 : data.likeNumber}
          </HeartNumber>
        </HeartContainer>
      </Container>
      <ReviewContent>{data.content}</ReviewContent>
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
`;

const HeartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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
