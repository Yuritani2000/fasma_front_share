import React from 'react';
import Circle from './StyledComponents/Circle';
import CircleParent from './StyledComponents/CircleParent';
import Container from './StyledComponents/Container';
import NumberOfNotification from './StyledComponents/NumberOfNotification';
import Parent from './StyledComponents/Parent';
import TextParent from './StyledComponents/TextParent';
import TriangleParent from './StyledComponents/TriangleParent';
import TrianglePosition from './StyledComponents/TrianglePosition';
import Text from '../../Atoms/Text/index';
import Triangle from './MockAtoms/Triangle';
import Color from '../../../styles/Color';

export type OneElementOfLeftMenuOnProfilePageProps = {
    label: string;                      // メニューの項目名
    numberOfNotification: number;       // 通知の数
    isDisplaying: boolean;              // その項目のページが表示されている場合はtrueが渡される
}

const OneElementOfLeftMenuOnProfilePage: React.FC<OneElementOfLeftMenuOnProfilePageProps> = (props) => {
    const {label, numberOfNotification, isDisplaying} = props;
    
    return (
        <Parent isPushed={isDisplaying}>
            <Container>
                <TextParent>
                    <Text size='Medium' textType='Default'>{label}</Text>
                </TextParent>
                <CircleParent isVisible={(numberOfNotification > 0) ? true : false}>
                    <Circle>
                        <NumberOfNotification>{numberOfNotification}</NumberOfNotification>
                    </Circle>
                </CircleParent>
                <TriangleParent>
                    <TrianglePosition>
                        <Triangle color={(isDisplaying) ? 'Black' : 'LightGray'}/>
                    </TrianglePosition>
                </TriangleParent>
            </Container>
        </Parent>
    );
}

export default OneElementOfLeftMenuOnProfilePage;