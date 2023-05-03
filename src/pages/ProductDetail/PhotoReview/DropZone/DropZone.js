import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

function DropZone({
  file,
  setFile,
  closeReviewModal,
  textAreaValue,
  setTextAreaValue,
  reviewSubmit,
  detailData,
}) {
  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  function handleTextArea(e) {
    setTextAreaValue(e.target.value);
  }

  function removeTextArea() {
    setTextAreaValue('');
  }

  function AddTextArea(content) {
    setTextAreaValue(content);
  }

  return (
    <WriteReviewContainer>
      <WriteReviewTitle>홈데코 올리기</WriteReviewTitle>
      <CloseButton
        onClick={() => {
          closeReviewModal();
          setFile(null);
          removeTextArea();
        }}
      >
        ✕
      </CloseButton>
      <ProductContainer>
        <ProductImage image={detailData.imageUrl} />
        <ProductInfo>
          <ModelNumber>{detailData.modelNumber}</ModelNumber>
          <EnglishName>The Lego Group All rights</EnglishName>
          <KoreanName>{detailData.productName}</KoreanName>
          <ProductSize>ONE SIZE</ProductSize>
        </ProductInfo>
      </ProductContainer>
      <StyledDropzone {...getRootProps()}>
        <input {...getInputProps()} />
        <UploadPicture>+ click to select files</UploadPicture>
      </StyledDropzone>
      <SelectedImgContainer>
        {file && (
          <SelectedImg>
            <img src={URL.createObjectURL(file)} alt={file.name} />
          </SelectedImg>
        )}
        {file && <AddBox {...getRootProps()}>+</AddBox>}
      </SelectedImgContainer>
      <ReviewInfo>
        작성된 후기는 DREAM 홍보 콘텐츠로 사용될 수 있습니다.
      </ReviewInfo>
      <ReviewContent
        value={textAreaValue}
        placeholder="#아이템과 #홈데코를 자랑해보세요... "
        onChange={handleTextArea}
      />
      <HashTagContainer>
        <HashTag
          onClick={() => {
            AddTextArea('#레고');
          }}
        >
          #레고
        </HashTag>
        <HashTag
          onClick={() => {
            AddTextArea('#레고브릭');
          }}
        >
          #레고브릭
        </HashTag>
        <HashTag
          onClick={() => {
            AddTextArea('#홈데코');
          }}
        >
          #홈데코
        </HashTag>
      </HashTagContainer>
      <SubmitButton
        onClick={() => {
          closeReviewModal();
          setFile(null);
          reviewSubmit();
          removeTextArea();
        }}
      >
        등록
      </SubmitButton>
    </WriteReviewContainer>
  );
}

const WriteReviewContainer = styled.div`
  position: fixed;
  width: 480px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  padding: 32px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 10px;
`;

const WriteReviewTitle = styled.div`
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 600;
  color: #222222;
  text-align: center;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 15px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
`;

const ProductImage = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 13px;
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ModelNumber = styled.div``;

const EnglishName = styled.div`
  font-size: 15px;
`;

const KoreanName = styled.div`
  line-height: 14px;
  margin-top: 6px;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`;

const ProductSize = styled.div`
  padding-top: 7px;
  margin-top: 5px;
  width: 90px;
  height: 30px;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  background-color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  color: rgba(34, 34, 34, 0.8);
  text-align: center;
`;

const StyledDropzone = styled.div`
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const SelectedImgContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
`;

const SelectedImg = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 132px;
    border-radius: 10px;
    object-fit: cover;
  }
  &:hover {
  }
`;

const AddBox = styled(StyledDropzone)`
  padding-top: 45px;
  height: 132px;
  font-size: 40px;
  font-weight: 100;
  background-color: #f5f5f5;
`;

const ReviewInfo = styled.div`
  margin-top: 30px;
  font-size: 13px;
  color: rgba(34, 34, 34, 0.5);
`;

const ReviewContent = styled.textarea`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 8px;
  resize: none;
  outline: none;
  color: #222222;
`;

const HashTagContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const HashTag = styled.div`
  padding-top: 8px;
  margin-top: 5px;
  width: 90px;
  height: 30px;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  background-color: #ffffff;
  font-size: 13px;
  color: rgba(34, 34, 34, 0.8);
  text-align: center;
`;

const UploadPicture = styled.div``;

const SubmitButton = styled.div`
  margin-top: 30px;
  padding: 11px 10px 10px 10px;
  border-radius: 10px;
  background-color: #222222;
  color: #fafafa;
  font-size: 14px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export default DropZone;
