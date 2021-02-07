import React from 'react';
import AboutSkill from './StyledComponents/AboutSkill';
import Parent from './StyledComponents/Parent';
import RowContainer from './StyledComponents/RowContainer';
import TextParent from './StyledComponents/TextParent';
import TriangleParent from './StyledComponents/TriangleParent';
import Image from '../../Atoms/Image/Image';
import Text from '../../Atoms/Text/index';

type SkillCardOnProfilePageProps = {
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
                    <Text textType={'Default'} size={'Medium'}>{skillName}</Text>
                    <TextParent>
                        <Text textType={'Default'} size={'Tiny'}>{skillExplanation}</Text>
                    </TextParent>
                </AboutSkill>
                <TriangleParent>
                    
                </TriangleParent>  
            </RowContainer>
        </Parent>
    );
}

