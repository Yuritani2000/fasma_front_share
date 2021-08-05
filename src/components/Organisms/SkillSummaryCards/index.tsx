import React from 'react';
import { useHistory } from 'react-router-dom';
import SkillSummaryCard, { SkillSummaryCardProps } from '../../Molecules/SkillSummaryCard';

export type SkillSummaryCardsProps = {
  skillSummariesData: SkillSummaryCardProps[]
}

const SkillSummaryCards: React.FC<SkillSummaryCardsProps> = (props) => {
  const { skillSummariesData } = props;
  const history = useHistory();

  const onClickSkillCard = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    history.push(`/hoge/${index}`); // TODO：URL link
  }

  return (
    <div>
      {skillSummariesData.map((skillSummaryData, index) => {
        return (
          <div key={index + skillSummaryData.skillName} onClick={(e) => { onClickSkillCard(e, index) }}>
            <SkillSummaryCard skillName={skillSummaryData.skillName} skillDescription={skillSummaryData.skillDescription} imageUrl={skillSummaryData.imageUrl} />
          </div>
        )
      })}
    </div>
  );
}

export default SkillSummaryCards;
