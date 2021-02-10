import styled from 'styled-components';
import Color from '../../../../styles/Color';
import { FontSize } from '../../../../styles/Font';

type StyledLabelProps = {
    color?: keyof typeof Color;
    backgroundColor?: keyof typeof Color;
    rounded?: boolean;
    topPositionPercentage?: number;
    leftPositionPercentage?: number;
    isDisplaying?: boolean;
    disabled?: boolean;
    height?: number;
    width?: number;
    customizedBorderRadius?: number;
    isBold: boolean;
    fontSize?: keyof typeof FontSize;
    opacity?: number;
}

const StyledLabel = styled.div<StyledLabelProps>((props)=> `
    color: ${(props.color) ? Color[props.color] : Color.White};
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    color: ${Color.Black};
    background-color: ${Color.Secondary};
    padding: 7px;
    width: 200px;
    text-align: center;
    border-radius: 100px;
    font-weight: bold;
    font-size: ${FontSize.Medium};
    opacity: 1.0;
    cursor: pointer;
`);