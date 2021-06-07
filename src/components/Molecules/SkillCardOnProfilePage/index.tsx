import React from 'react';
import AboutSkill from './StyledComponents/AboutSkill';
import Parent from './StyledComponents/Parent';
import RowContainer from './StyledComponents/RowContainer';
import TextParent from './StyledComponents/TextParent';
import TriangleParent from './StyledComponents/TriangleParent';
import TrianglePosition from './StyledComponents/TrianglePosition';
import Image from '../../Atoms/Image/Image';
import Text from '../../Atoms/Text/index';
import MultipleLines from './StyledComponents/MultipleLines';
import TriangleIcon from '../../Atoms/TriangleIcon/TriangleIcon';

export type SkillCardOnProfilePageProps = {
    skillName?: string;
    skillExplanation?: string;
    imageUrl: string;
}

const SkillCardOnProfilePage: React.FC<SkillCardOnProfilePageProps> = (props) => {
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

export default SkillCardOnProfilePage;