import React from 'react'
import Header from '../../Organisms/Header'
import SkillPost from '../../Organisms/SkillPost'
import { Container, HeaderContainer, SkillPostArea } from './StyledComponent'

const SkillPostTemplate: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header isSearchBox={false} />
      </HeaderContainer>
      <SkillPostArea>
        <SkillPost />
      </SkillPostArea>
    </Container>
  )
}

export default SkillPostTemplate