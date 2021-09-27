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

export type SkillListTemplateProps = {
  category: Items[];
  skills: SkillsState;
}

const SkillListTemplate: React.FC<SkillListTemplateProps> = (props) => {
  const { category, skills } = props;
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header isSearchBox={true} />
      </HeaderWrapper>
      <SkillListResultSettingWrapper>
        <SkillListResultSetting />
      </SkillListResultSettingWrapper>
      <DetailedSearchBoxWrapper>
        <DetailedSearchBox Category={category} />
      </DetailedSearchBoxWrapper>
      <SkillCardListWrapper>
        <SkillCardList skillData={skills} />
      </SkillCardListWrapper>
    </Wrapper>
  )
}

export default SkillListTemplate;