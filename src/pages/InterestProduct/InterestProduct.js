import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InterestProductList from './InterestProductList/InterestProductList';
import SideNav from './SideNav/SideNav';

function InterestProduct() {
  const [removeData, setRemoveData] = useState([]);

  useEffect(() => {
    fetch('/data/reviewData.json')
      .then(response => response.json())
      .then(result => setRemoveData(result));
  }, []);

  function handleRemove(targetId) {
    const newProductData = removeData.filter(data => data.id !== targetId);
    setRemoveData(newProductData);
  }

  return (
    <FullContainer>
      <SideNav />
      <InterestProductContainer>
        <InterestProductTitle>관심 상품</InterestProductTitle>
        {removeData.map(data => {
          return (
            <InterestProductList
              key={data.id}
              data={data}
              handleRemove={handleRemove}
            />
          );
        })}
      </InterestProductContainer>
    </FullContainer>
  );
}

const FullContainer = styled.div`
  display: flex;
  width: 1280px;
  padding: 40px 40px 160px;
  margin: 0 auto;
`;

const InterestProductContainer = styled.div`
  flex-grow: 1;
  padding-top: 10px;
`;

const InterestProductTitle = styled.div`
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 3px solid #000000;
  font-size: 25px;
  font-weight: 600;
`;
export default InterestProduct;
