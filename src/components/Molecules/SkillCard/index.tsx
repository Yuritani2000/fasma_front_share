import React from 'react';

// Styled Components
import {
  Wrapper, DescriptionBox
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

const tagList = (tagListData: string[]) => {
  var num = 0
  return tagListData.map( tagData => {
    return tagData ? <Text children={tagData} textType="Default" size="Small" key={num}/> : <div />
  })
}

const SkillCard: React.FC<SkillCardProps> = (props) => {
  const { skillName, skillCategory, tags, skillDescription, price, imgUrl } = props
  return (
    <Wrapper>
        <DescriptionBox>
          <Text children={skillName} textType="Default" size="Medium" />
          <Text children={skillCategory} textType="Default" size="Small" />
          <Text children={skillCategory} textType="Default" size="Small" />
          <div>{tags ? tagList(tags): <div />}</div>
          <div>desc:{skillDescription}</div>
          <Text children={price} textType="Default" size="Small" textAlign="right"/>
        </DescriptionBox>
        <Image url={imgUrl} size={200}/>
    </Wrapper>
  );
}

export default SkillCard;