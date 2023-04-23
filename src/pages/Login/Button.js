import React from 'react';
import styled from 'styled-components';
const Button = () => {
  return <LoginButton>로그인</LoginButton>;
};
const LoginButton = styled.button`
  width: 500px;
  height: 75px;
  font-size: 23px;
  border-radius: 12px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-top: 30px;
  background-color: #ebebeb;
  color: white;
  text-decoration: none;
`;
export default Button;
