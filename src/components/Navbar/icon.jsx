import React from "react";
import styled from "styled-components";

function Icon({ SvgIcon }) {
  return (
    <IconDiv>
      <SvgIcon />
    </IconDiv>
  );
}
const IconDiv = styled.div`
  background: white;
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
  svg {
    color: #e60000;
  }
`;
export default Icon;
