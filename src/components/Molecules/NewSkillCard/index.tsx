import React from "react";
import styled from "styled-components";
import Color from "../../../styles/Color";
import { FontSize } from "../../../styles/Font";
import Space from "../../../styles/Space";

export type NewSkillCardProps = {
  skillName: string;
  thumbnail: string;
  price: number
}

const NewSkillCard: React.FC<NewSkillCardProps> = (props) => {
  const { skillName, thumbnail, price } = props;
  return (
    <Wrapper>
      <StyledImg src={thumbnail} />
      <StyledPrice>
        {price}
      </StyledPrice>
      <StyledSkillName>
        {skillName}
      </StyledSkillName>
    </Wrapper>
  )
}

export default NewSkillCard

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const StyledPrice = styled.div`
  position: absolute;
  bottom: ${Space.LARGE};
  right: 0;
  margin-right: 10px;
  font-size: 1.2rem;
  background-color: ${Color.White};
  padding-left: ${Space.TINY};
  padding-right: ${Space.TINY};
  border-radius: 5px;
`

const StyledSkillName = styled.div`
  position: absolute;
  font-size: ${FontSize.Small}; 
  left: ${Space.SMALL};
  bottom: ${Space.SMALL};
  background-color: ${Color.White};
  padding-left: ${Space.TINY};
  padding-right: ${Space.TINY};
  border-radius: 5px;
`