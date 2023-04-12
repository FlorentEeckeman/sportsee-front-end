import React from "react";
import Logo from "../../assets/Logo";
import styled from "styled-components";

function Header() {
  return (
    <HeaderDiv>
      <HeaderLogo>
        <Logo />
        <div>SportSee</div>
      </HeaderLogo>
      <div>Accueil</div>
      <div>Profil</div>
      <div>Réglage</div>
      <div>Communauté</div>
    </HeaderDiv>
  );
}
const HeaderDiv = styled.div`
  background: #020203;
  height: 91px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 80px 0px 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: content-box;
  div {
    color: white;
    font-size: 22px;
    :hover {
      cursor: pointer;
    }
  }
`;
const HeaderLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 11px;
  div {
    font-size: 22px;
    font-weight: 500;
    color: #e60000;
  }
`;
export default Header;
