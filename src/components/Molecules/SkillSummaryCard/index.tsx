import React from 'react';
import { Parent, RowContainer, AboutSkill, TextParent, MultipleLines, TriangleParent, TrianglePosition } from './styledComponents';
import Image from '../../Atoms/Image/Image';
import Text from '../../Atoms/Text/index';
import TriangleIcon from '../../Atoms/TriangleIcon/TriangleIcon';


export type SkillSummaryCardProps = {
    skillName?: string;
    skillExplanation?: string;
    imageUrl: string;
}

const SkillSummaryCard: React.FC<SkillSummaryCardProps> = (props) => {
    const {skillName = 'nullSkillName',
           skillExplanation = 'nullSkillExplanation',
           imageUrl} = props;
    
    return(
        <Parent>
            <RowContainer>
                <Image url={imageUrl} size={97}/>
                <AboutSkill>
                    <Text textType={'Default'} size={'Medium'} omit={true} omittingLineNumber={1}>{skillName}</Text>
                    <TextParent>
                        <MultipleLines>
                            <Text textType={'Default'} size={'Small'} omit={true} omittingLineNumber={3}>{skillExplanation}</Text>
                        </MultipleLines>
                    </TextParent>
                </AboutSkill>
                <TriangleParent>
                    <TrianglePosition>
                        <TriangleIcon/>
                    </TrianglePosition>
                </TriangleParent>  
            </RowContainer>
        </Parent>
    );
}

export default SkillSummaryCard;