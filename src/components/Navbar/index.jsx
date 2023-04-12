import React from "react";
import styled from "styled-components";
import Icon from "./icon";
import yoga from "../../assets/Icon/dashboard/yoga";
import swim from "../../assets/Icon/dashboard/swim";
import bike from "../../assets/Icon/dashboard/bike";
import halter from "../../assets/Icon/dashboard/halter";

function NavBar() {
  return (
    <NavBarDiv>
      <div className="navbar-icon">
        <Icon Svgicon={yoga} />
        <Icon Svgicon={swim} />
        <Icon Svgicon={bike} />
        <Icon Svgicon={halter} />
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
  height: 100%;
  justify-content: space-around;
  .navbar-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
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
