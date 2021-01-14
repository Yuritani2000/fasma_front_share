import React from "react";
import styled from "styled-components";
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
  position: relative;
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 10;
`
const StyledPrice = styled.div`
  position: absolute;
  top: 5;
  right: 0;
  margin-right: 10px;
  font-size: 1.2rem;
  z-index: 20;
`

const StyledSkillName = styled.div`
  margin-top: ${Space.SMALL};
  margin-left: ${Space.SMALL};
  font-size: ${FontSize.Small};
  z-index: 10;
`