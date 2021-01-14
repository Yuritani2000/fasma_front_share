import React from 'react';
// Atoms
import SkillCard, { SkillCardProps } from '../../Molecules/SkillCard';
// State
import { SkillsState, Skill } from '../../../states/Skills';
// Styled Components
import {
  Wrapper
} from './styledComponents';

export type SkillCardListProps = {
  skillData: SkillsState;
}

const SkillCardList: React.FC<SkillCardListProps> = (props) => {
  const { skillData } = props;
  const skillCardList = (skillDatas: SkillsState) => {
    return skillDatas.map((skillData: Skill) => {
      const { id, name, thumbnail, description, price, category, tags } = skillData;
      return skillData ? <SkillCard id={id} skillName={name} skillCategory={category} tags={tags} skillDescription={description} price={price} imgUrl={thumbnail} key={skillData.id} /> : <div />
    })
  }
  return (
    <Wrapper>
      {skillCardList(skillData)}
    </Wrapper>
  );
}

export default SkillCardList