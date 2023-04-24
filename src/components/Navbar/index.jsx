import React from "react";
import styled from "styled-components";
import Icon from "./icon";
import yoga from "../../assets/Icon/dashboard/yoga";
import swim from "../../assets/Icon/dashboard/swim";
import bike from "../../assets/Icon/dashboard/bike";
import halter from "../../assets/Icon/dashboard/halter";

function NavBar({ user, setUser }) {
  const changeUser = () => {
    if (user === 12) setUser(18);
    else setUser(12);
  };
  return (
    <NavBarDiv>
      <div className="navbar-icon">
        <Icon SvgIcon={yoga} />
        <Icon SvgIcon={swim} />
        <Icon SvgIcon={bike} />
        <Icon SvgIcon={halter} />
      </div>
      <div className="navbar-user" onClick={changeUser}>
        Autre Utilisateur
      </div>
      <div className="navbar-copyright">Copiryght, SportSee 2020</div>
    </NavBarDiv>
  );
}
const NavBarDiv = styled.div`
  background: #020203;
  width: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .navbar-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }
  .navbar-user {
    color: red;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    height: 38px;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
  }
  .navbar-copyright {
    color: white;
    transform: rotate(-90deg);
    width: 138px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
  }
`;
export default NavBar;
