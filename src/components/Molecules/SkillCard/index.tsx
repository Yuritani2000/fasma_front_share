import React from 'react';

// Styled Components
import {
  Wrapper, DescriptionBox
} from './styledComponents';

export type SkillCardProps = {
  skillName: string
  skillCategory: string
  tags?: string[]
  skillDescription: string
  price: number
  imgUrl: string
}

const SkillCard: React.FC<SkillCardProps> = (props) => {
  const { skillName, skillCategory, tags, skillDescription, price, imgUrl } = props
  return (
    <Wrapper>
        <DescriptionBox>
          <div>skill:{skillName}</div>
          <div>category:{skillCategory}</div>
          <div>tags:{tags}</div>
          <div>desc:{skillDescription}</div>
          <div>price:{price}</div>
        </DescriptionBox>
        <img src={imgUrl} alt="画像を読み込めませんでした"/>
    </Wrapper>
  );
}

export default SkillCard;