import React from 'react';

// Styled Components
import {
  Wrapper, DescriptionBox, ListWrapper, TagWrapper
} from './styledComponents';

import Image from '../../Atoms/Image/Image'
import Text from '../../Atoms/Text'

export type SkillCardProps = {
  id: number
  skillName: string
  skillCategory: string
  tags?: string[]
  skillDescription: string
  price: number
  imgUrl: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
var num = 0

const tagList = (tagListData: string[]) => {
  return tagListData.map(tagData => {
    return <TagWrapper key={num++}><Text link={true} children={"#" + tagData} textType="Default" size='Tiny' key={num++} /> </TagWrapper>
  })
}

const SkillCard: React.FC<SkillCardProps> = (props) => {
  const { skillName, skillCategory, tags, skillDescription, price, imgUrl, onClick } = props
  return (
    <Wrapper onClick={onClick}>
      <DescriptionBox>
        <Text children={skillName} textType="Default" size="Medium" />
        <Text children={skillCategory} textType="Default" size="Small" />
        <ListWrapper>{tags ? tagList(tags) : <div />}</ListWrapper>
        <Text children={skillDescription} textType="Default" size="Small" maxLines={4} />
        <Text children={price + " Funny"} textType="Default" size="Small" textAlign="right" />
      </DescriptionBox>
      <Image url={imgUrl} size={180} />
    </Wrapper>
  );
}

export default SkillCard;