import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterBox>
      <div>
        <Logo>DREAM</Logo>
        <OurTeam> FE: Kimyoungoun / Choisunyoung / Chogunho </OurTeam>
        <OurTeam> BE: Kimminsu / Jangdahee / Barkseayick / Songsukjun </OurTeam>
        <InWecode>© WECODE DREAM 2023</InWecode>
      </div>
    </FooterBox>
  );
}

const FooterBox = styled.div`
  width: 100vw;
  height: 13vh;
  div {
    padding: 8px 0;
  }
`;

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-size: 30px;
  font-weight: 900;
  font-style: italic;
`;

const OurTeam = styled.p`
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

const InWecode = styled.p`
  display: flex;
  padding: 10px 0;
  justify-content: center;
  font-size: 16px;
`;

export default Footer;
