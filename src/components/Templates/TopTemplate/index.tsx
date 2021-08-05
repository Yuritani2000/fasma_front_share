import React from 'react'
import styled from 'styled-components'
import { TopPageSkillsState } from '../../../states/Skills'
import Space from '../../../styles/Space'
import Header from '../../Organisms/Header'
import NewSkillList from '../../Organisms/NewSkillList'

export type HomeTempleteProps = {
  topPageSkills: TopPageSkillsState
}

const TopTemplate: React.FC<HomeTempleteProps> = (props) => {
  const { topPageSkills } = props;
  return (
    <div>
      <Header isSearchBox={true} />
      <StyledNewSkillListArea>
        {Object.entries(topPageSkills).map(([category, skills]) => {
          return (
            <NewSkillList key={category} category={category} skills={skills} />
          )
        })
        }
      </StyledNewSkillListArea>
    </div>
  )
}

export default TopTemplate;

const StyledNewSkillListArea = styled.div`
  margin-top: 8%;
  margin-left: ${Space.BASE};
`