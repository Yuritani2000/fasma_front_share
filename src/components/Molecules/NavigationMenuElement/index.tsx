import React from 'react';
import Text from '../../Atoms/Text/index';
import TriangleIcon from '../../Atoms/TriangleIcon/TriangleIcon';
import { Circle, CircleParent, Container, NumberOfNotification, Parent, TextParent, TriangleParent, TrianglePosition } from './StyledComponents'

export type NavigationMenuElementProps = {
    label: string;                      // メニューの項目名
    notificationCount: number;       // 通知の数
    isSelected: boolean;              // その項目のページが表示されている場合はtrueが渡される
}

const NavigationMenuElement: React.FC<NavigationMenuElementProps> = (props) => {
    const {label, notificationCount, isSelected} = props;
    
    return (
        <Parent isPushed={isSelected}>
            <Container>
                <TextParent>
                    <Text size='Medium' textType='Default'>{label}</Text>
                </TextParent>
                <CircleParent isVisible={(notificationCount > 0) ? true : false}>
                    <Circle>
                        <NumberOfNotification>{notificationCount >= 100 ? '99+' : notificationCount }</NumberOfNotification>
                    </Circle>
                </CircleParent>
                <TriangleParent>
                    <TrianglePosition>
                        <TriangleIcon color={(isSelected) ? 'Black' : 'LightGray'}/>
                    </TrianglePosition>
                </TriangleParent>
            </Container>
        </Parent>
    );
}

export default NavigationMenuElement;