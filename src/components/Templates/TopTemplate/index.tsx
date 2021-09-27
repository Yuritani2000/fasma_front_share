import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { TopPageSkillsState } from '../../../states/Skills'
import Space from '../../../styles/Space'
import FloatingActionButton from '../../Atoms/FloatingActionButton'
import Header from '../../Organisms/Header'
import NewSkillList from '../../Organisms/NewSkillList'

export type HomeTemplateProps = {
  topPageSkills: TopPageSkillsState
}

const TopTemplate: React.FC<HomeTemplateProps> = (props) => {
  const { topPageSkills } = props;
  const history = useHistory();

  const handleClickPostButtom = () => {
    history.push('/post')
  }

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
      <FloatingActionButton label="出品" handleClick={handleClickPostButtom} />
    </div>
  )
}

export default TopTemplate;

const StyledNewSkillListArea = styled.div`
  margin-top: 8%;
  margin-left: ${Space.BASE};
`