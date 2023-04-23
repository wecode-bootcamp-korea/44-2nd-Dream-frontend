import React from 'react';
import styled from 'styled-components';

const Input = ({ title, name, placeholder, detail, type, value, onChange }) => {
  return (
    <InputWrap>
      <Name value={value}>{title}</Name>
      <InfoInput
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {value.length > 0 && <Validation>{detail}</Validation>}
    </InputWrap>
  );
};
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Name = styled.h3`
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.value.length > 0 ? '#f15746' : 'black')};
`;

const InfoInput = styled.input`
  width: 500px;
  font-size: 20px;
  margin-top: 13px;
  border: none;
  border-bottom: 1px solid #ebebeb;
  outline: none;
  margin-bottom: 7px;
  padding-bottom: 5px;

  &:focus {
    border-color: blue;
    border-bottom: 2px solid black;
  }
`;

const Validation = styled.p`
  color: #f15746;
  font-size: 14px;
`;

export default Input;
