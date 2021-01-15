import React from 'react'
// Organisms
import Header from '../../Organisms/Header';
import DetailedSearchBox from '../../Organisms/DetailedSearchBox';
import SkillCardList from '../../Organisms/SkillCardList';
import SkillListResultSetting from '../../Organisms/SkillListResultSetting'
// Molecules
import { Items } from '../../Molecules/DropdownList'; //TODO: これちょっとどうにかしたいわ
// State
import { SkillsState } from '../../../states/Skills';
import {
  Wrapper,
  HeaderWrapper,
  SkillListResultSettingWrapper,
  DetailedSearchBoxWrapper,
  SkillCardListWrapper,
} from './styeldComponent';

export type Props = {
  Category: Items[];
  skills: SkillsState;
}

const SkillListTemplate: React.FC<Props> = (props) => {
  const { Category, skills } = props;
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header isSerchBox={true} />
      </HeaderWrapper>
      <SkillListResultSettingWrapper>
        <SkillListResultSetting />
      </SkillListResultSettingWrapper>
      <DetailedSearchBoxWrapper>
        <DetailedSearchBox Category={Category} />
      </DetailedSearchBoxWrapper>
      <SkillCardListWrapper>
        <SkillCardList skillData={skills} />
      </SkillCardListWrapper>
    </Wrapper>
  )
}

export default SkillListTemplate;