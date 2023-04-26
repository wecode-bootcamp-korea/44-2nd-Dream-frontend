import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import Search from './Search';
import ka from '../../assets/ka.png';

const Login = () => {
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
  const openKakaoLogin = () => {
    window.location.href = kakaoAuthUrl;
  };

  const [userInfo, setUserInfo] = useState({
    email: '',
    pw: '',
  });

  const { email, pw } = userInfo;

  const handleValue = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <Info>
      <Title>DREAM</Title>
      <Definition>DREAMS RULE EVERYTHING AROUND ME</Definition>

      <Input
        title="이메일 주소"
        placeholder="ex) dream@dream.co.kr"
        detail="이메일 주소를 정확히 입력해주세요"
        type="text"
        name="email"
        value={email}
        onChange={handleValue}
      />
      <Input
        title="비밀번호"
        detail="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8~16자)"
        type="password"
        name="pw"
        value={pw}
        onChange={handleValue}
      />

      <Button />
      <Search />
      <KakaoBtn onClick={openKakaoLogin} />
    </Info>
  );
};
const Info = styled.div`
  width: 600px;
  height: 700px;
  display: flex;
  margin: 100px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const KakaoBtn = styled.div`
  margin-top: 20px;
  background-image: url(${ka});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 500px;
  border-radius: 12px;
  height: 75px;
`;
const Title = styled.h1`
  font-size: 46px;
  font-weight: 900;
  font-style: italic;
`;

const Definition = styled.h3`
  margin-top: 5px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`;
export default Login;
