import React from 'react';
import { useHistory } from 'react-router-dom';
import SkillSummaryCard, { SkillSummaryCardProps } from '../../Molecules/SkillSummaryCard';

export type SkillSummaryCardsProps = {
  skillSummarysData: SkillSummaryCardProps[]
}

const SkillSummaryCards: React.FC<SkillSummaryCardsProps> = (props) => {
  const { skillSummarysData } = props;
  const history = useHistory();

  const onClickSkillCard = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    history.push(`/hoge/${index}`); // TODO：URL link
  }

  return (
    <div>
      {skillSummarysData.map((skillSummaryData, index) => {
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
