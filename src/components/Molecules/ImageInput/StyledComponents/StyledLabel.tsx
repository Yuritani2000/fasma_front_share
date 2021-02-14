import styled from 'styled-components';
import Color from '../../../../styles/Color';
import { FontSize } from '../../../../styles/Font';

export type StyledLabelProps = {
    color?: keyof typeof Color;
    backgroundColor?: keyof typeof Color;
    borderColor?: keyof typeof Color;
    borderWidth?: number;
    isRounded?: boolean;
    padding?: number;
    customizedBorderRadius?: number;
    topPositionPercentage?: number;
    leftPositionPercentage?: number;
    isVisible?: boolean;
    width?: number;
    height?: number;
    isBold?: boolean;
    fontSize?: keyof typeof FontSize;
    opacity?: number;
}

const StyledLabel = styled.label<StyledLabelProps>((props)=> `
    color: ${(props.color) ? Color[props.color] : Color.White};
    background-color: ${(props.backgroundColor) ? Color[props.backgroundColor] : Color.Secondary};
    border: solid;
    border-color: ${(props.borderColor) ? Color[props.borderColor] : 'transparent'};
    border-width: ${(props.borderWidth) ? props.borderWidth + 'px' : '0px'};
    position: absolute;
    transform: translate(-50%, -50%);
    padding: ${(props.padding) ? props.padding + 'px' : (props.padding == 0) ? '0px' : '7px'};
    border-radius: ${(props.isRounded) ? '100px' : (props.customizedBorderRadius) ? props.customizedBorderRadius + 'px' : '3px'};
    top: ${(props.topPositionPercentage) ? props.topPositionPercentage + '%' : 'calc(100% - 30px)'};
    left: ${(props.leftPositionPercentage) ? props.leftPositionPercentage + '%' : 'calc(100% - 30px)'};
    visibility: ${(props.isVisible == true || props.isVisible == false) ? (props.isVisible === true) ? 'visible' : 'collapse' : 'visible'};
    width: ${(props.width) ? props.width + 'px': '50px'};
    height: ${(props.height) ? props.height + 'px': '50px'};
    font-weight: ${(props.isBold) ? 'bold' : 'normal'};
    font-size: ${(props.fontSize) ? FontSize[props.fontSize] : FontSize.Medium};
    opacity: ${(props.opacity) ? props.opacity : '1.0'};
    cursor: pointer;
    text-align: center;
    line-height: ${(props.height) ? props.height + 'px': '50px'};
`);

export default StyledLabel;