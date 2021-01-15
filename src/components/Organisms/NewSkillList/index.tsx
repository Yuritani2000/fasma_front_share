import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Skill } from '../../../states/Skills';
import Color from '../../../styles/Color';
import { FontSize } from '../../../styles/Font';
import Space from '../../../styles/Space';
import Text from '../../Atoms/Text';
import Card, { StyledCardSizeDefault } from '../../Molecules/Card';
import NewSkillCard from '../../Molecules/NewSkillCard';

export type NewSkillListProps = {
  skills: Skill[]
  category: string
}

const NewSkillList: React.FC<NewSkillListProps> = (props) => {
  const { category, skills } = props
  const newSkillListTitle = `${category}の新着スキル`
  const history = useHistory();

  const onClick = () => {
    history.push('/skillList')
  }

  return (
    <Wrapper>
      <Text textType={"Default"} size={"H3"} >{newSkillListTitle}</Text>
      <StyledDetailButtom onClick={onClick} >
        もっと見る ＞
      </StyledDetailButtom>
      <StyledCardList>
        {skills.map((skill, index) => {
          return (
            <StyledCard>
              <Card key={`card${index}`} cardProps={{ styledCardSize: StyledCardSizeDefault.SKILL, backgroundColor: Color.White }}>
                <NewSkillCard key={`skillCard${index}`} price={skill.price} skillName={skill.name} thumbnail={skill.thumbnail} />
              </Card>
            </StyledCard>
          )
        })}
      </StyledCardList>
    </Wrapper>
  )
}

export default NewSkillList;


const Wrapper = styled.div`
  margin-top: ${Space.X_LARGE}
`;


const StyledCardList = styled.div`
  margin-top: ${Space.SMALL}
`;

const StyledCard = styled.span`
  margin-right: ${Space.BASE};
`

const StyledDetailButtom = styled.div`
  cursor: pointer;
  margin-right: 0;
  font-size: ${FontSize.Tiny}
`