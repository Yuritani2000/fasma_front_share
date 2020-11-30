import React from "react";
import Color from "../../styles/Color";
import styled from "styled-components";

const FloatingActionButton: React.FC = () => {
    const moveToSkillExhibitPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    }
    return (
        <StyledFloatingActionButton onClick={moveToSkillExhibitPage}>
            出品
        </StyledFloatingActionButton>
    )
}

const StyledFloatingActionButton = styled.button`
top: auto;
bottom: 20px;
right: 20px;
left: auto;
width:100px;
height:100px;
font-size:25px;
font-weight:bold;
border-radius:50%;
border:none;
position: fixed;
color:white;
background-color:${Color.Primary};
background-position: center;
transition: background 0.9s;
:hover {
     background: #f75c02 radial-gradient(circle, transparent 1%, #f75c02 1%) center/15000%;
  }
:active{
    background-color: white;
    background-size: 50%;
    transition: background 0s;
}
`
export default FloatingActionButton