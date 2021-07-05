import React from 'react';
import Text from '../../Atoms/Text/index';
import TriangleIcon from '../../Atoms/TriangleIcon/TriangleIcon';
import { Circle, CircleParent, NumberOfNotification, Container, TextParent, TriangleParent, TrianglePosition } from './StyledComponents'

export type NavigationMenuElementProps = {
    label: string;                      // メニューの項目名
    notificationCount: number;       // 通知の数
    isSelected: boolean;              // その項目のページが表示されている場合はtrueが渡される
    width: number;
    height: number;
}

const NavigationMenuElement: React.FC<NavigationMenuElementProps> = (props) => {
    const {label, notificationCount, isSelected, width, height} = props;

    return (
        <Container width={width} height={height} isPushed={isSelected}>
            <TextParent>
                <Text omit={true} omittingLineNumber={1} size='Medium' textType='Default'>{label}</Text>
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
    );
}

export default NavigationMenuElement;