import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function CategoryBtn({ id, text }) {
  const navigate = useNavigate();
  function goToEvent() {
    navigate('/event');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <ButtonBox>
      <div>
        <Button onClick={goToEvent}>
          <InnerText id={id}>{text}</InnerText>
        </Button>
        <OuterText>{text}</OuterText>
      </div>
    </ButtonBox>
  );
}

const ButtonBox = styled.div`
  height: 130px;
  margin: 0 auto;
  padding: 30px 10px;
`;

const Button = styled.button`
  max-width: 10vw;
  min-width: 14vw;
  height: 100px;
  background-color: black;
  color: white;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
`;

const InnerText = styled.p`
  font-size: 25px;
  font-weight: 700;
  &:hover {
    transform: ${props => (props.id === 1 ? 'scale(1.3)' : 'scale(1.5)')};
    transition: 0.5s ease;
  }
`;

const OuterText = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 15px;
`;

export default CategoryBtn;
