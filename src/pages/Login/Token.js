import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Token = () => {
  const IP = '10.58.52.75:3000';
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const getKakaoToken = () => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      //인가 코드
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${code}`,
    })
      .then(req => req.json())
      .then(result => {
        if (result.access_token) {
          //백엔드에게 줄 토큰
          fetch(`http://${IP}/users/kakaologin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
              kakaoToken: result.access_token,
            }),
          })
            .then(res => res.json())
            .then(
              data => localStorage.setItem('token', data.token),
              navigate('/')
            );
        } else {
          alert('다시 시도해주세요');
          navigate('/login');
        }
      });
  };

  useEffect(() => {
    if (!window.location.search) return;
    getKakaoToken();
  }, []);

  return <>hi</>;
};
export default Token;
