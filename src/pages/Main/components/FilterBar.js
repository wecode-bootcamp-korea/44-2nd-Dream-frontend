import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function FilterBar() {
  const [sideCategory, setSideCategory] = useState([]);

  useEffect(() => {
    fetch('/data/sideCategory.json')
      .then(res => res.json())
      .then(data => setSideCategory(data));
  }, []);

  return (
    <FilterBarBox>
      <div>
        <Title>필터</Title>
        <ButtonWrap>
          <RocketDelivery>무료배송</RocketDelivery>
        </ButtonWrap>

        <CategoryWrap>
          {sideCategory?.map(({ id, title, name }) => {
            return (
              <CategoryDetailBox key={id}>
                <CategorySummary>&nbsp;&nbsp;{title}</CategorySummary>
                <ul>
                  {name?.map(({ name_id, name_text }) => {
                    return (
                      <CategoryInner key={name_id}>{name_text}</CategoryInner>
                    );
                  })}
                </ul>
              </CategoryDetailBox>
            );
          })}
        </CategoryWrap>
      </div>
    </FilterBarBox>
  );
}

const FilterBarBox = styled.div`
  width: 20vw;
  height: 100vh;
  padding: 20px 40px;
  position: sticky;
  top: 120px;
  left: 0;
`;

const Title = styled.p`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const RocketDelivery = styled.button`
  width: 100px;
  height: 50px;
  padding: 10px 15px;
  margin: 5px;
  border: 1px solid rgba(188, 188, 188, 0.5);
  border-radius: 30px;
  background-color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    width: 200px;
    color: white;
    background-color: black;
    transition: 0.5s ease;
  }
`;
const CategoryWrap = styled.div`
  padding: 20px 10px;
`;

const CategoryDetailBox = styled.details`
  border-bottom: 1px solid rgba(188, 188, 188, 0.5);
  ul {
    padding: 13px 10px;
  }
`;

const CategorySummary = styled.summary`
  padding: 13px 0;
  font-size: 15px;
`;

const CategoryInner = styled.li`
  padding: 10px;
  color: gray;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: black;
    font-weight: 700;
  }
`;

export default FilterBar;
