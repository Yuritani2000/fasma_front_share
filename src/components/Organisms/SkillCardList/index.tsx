import React from 'react';
// Atoms
import SkillCard from '../../Molecules/SkillCard';
// State
import { SkillsState, Skill } from '../../../states/Skills';
// Styled Components
import {
  Wrapper
} from './styledComponents';
import { useHistory } from 'react-router-dom';

export type SkillCardListProps = {
  skillData: SkillsState;
}

const SkillCardList: React.FC<SkillCardListProps> = (props) => {
  const { skillData } = props;
  const history = useHistory()

  const onClickSkillCard = () => {
    history.push('/purchase')
  }

  const skillCardList = (skillDatas: SkillsState) => {
    return skillDatas.map((skillData: Skill) => {
      const { id, name, thumbnail, description, price, categories_name } = skillData;
      return skillData ? (
        <span onClick={onClickSkillCard} key={id}>
          <SkillCard
            id={id}
            skillName={name}
            skillCategory={categories_name}
            skillDescription={description}
            price={price}
            imgUrl={thumbnail}
            key={skillData.id}
          />
        </span>
      ) : (
        <div />
      );
    })
  }
  return (
    <Wrapper>
      {skillCardList(skillData)}
    </Wrapper>
  );
}

export default SkillCardList