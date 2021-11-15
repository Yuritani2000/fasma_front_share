import React from 'react';
import { Parent, RowContainer, AboutSkill, TextParent, MultipleLines, TriangleParent, TrianglePosition } from './styledComponents';
import Image from '../../Atoms/Image/Image';
import Text from '../../Atoms/Text/index';
import TriangleIcon from '../../Atoms/TriangleIcon/TriangleIcon';


export type SkillSummaryCardProps = {
    skillName: string;
    skillDescription?: string;
    imageUrl: string;
    handleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SkillSummaryCard: React.FC<SkillSummaryCardProps> = (props) => {
    const {
        skillName,
        skillDescription = '',
        imageUrl,
        handleClick
    } = props;

    return (
        <Parent onClick={handleClick}>
            <RowContainer>
                <Image url={imageUrl} size={97} />
                <AboutSkill>
                    <Text textType={'Default'} size={'Medium'} maxLines={1}>{skillName}</Text>
                    <TextParent>
                        <MultipleLines>
                            <Text textType={'Default'} size={'Small'} maxLines={3}>{skillDescription}</Text>
                        </MultipleLines>
                    </TextParent>
                </AboutSkill>
                <TriangleParent>
                    <TrianglePosition>
                        <TriangleIcon />
                    </TrianglePosition>
                </TriangleParent>
            </RowContainer>
        </Parent>
    );
}

export default SkillSummaryCard;