import React from 'react';
// Atoms
import SkillCard, { SkillCardProps } from '../../Molecules/SkillCard';
// Styled Components
import {
  Wrapper
} from './styledComponents';

export type SkillCardListProps = {
  skillData: SkillCardProps[];
}

const SkillCardList: React.FC<SkillCardListProps> = (props) => {
  const { skillData } = props;
  const skillCardList = (skillDatas: SkillCardProps[]) => {
    var num = 0
    return skillDatas.map(skillData => {
      return skillData ? <SkillCard {...skillData} key={++num}/> :<div />
    })
  }
  return (
    <Wrapper>
      {skillCardList(skillData)}
    </Wrapper>
  );
}

export default SkillCardList