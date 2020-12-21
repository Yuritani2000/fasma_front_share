import React from 'react';

// Styled Components
import {
  Wrapper, DescriptionBox, ListWrapper, TagWrapper
} from './styledComponents';

import Image from '../../Atoms/Image/Image'
import Text from '../../Atoms/Text'

export type SkillCardProps = {
  skillName: string
  skillCategory: string
  tags?: string[]
  skillDescription: string
  price: number
  imgUrl: string
}
var num = 0

const tagList = (tagListData: string[]) => {
  return tagListData.map(tagData => {
    return tagData ? <TagWrapper key={num++}><Text link={true} children={"#" + tagData} textType="Default" size='Tiny' key={num++} /> </TagWrapper> : <div />
  })
}

const SkillCard: React.FC<SkillCardProps> = (props) => {
  const { skillName, skillCategory, tags, skillDescription, price, imgUrl } = props
  return (
    <Wrapper>
      <DescriptionBox>
        <Text children={skillName} textType="Default" size="Medium" />
        <Text children={skillCategory} textType="Default" size="Small" />
        <ListWrapper>{tags ? tagList(tags) : <div />}</ListWrapper>
        <Text children={skillDescription} textType="Default" size="Small" />
        <Text children={price + " Funny"} textType="Default" size="Small" textAlign="right" />
      </DescriptionBox>
      <Image url={imgUrl} size={180} />
    </Wrapper>
  );
}

export default SkillCard;