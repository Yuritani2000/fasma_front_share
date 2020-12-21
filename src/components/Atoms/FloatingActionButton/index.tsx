import React from "react";
import Color from "../../../styles/Color";
import { FontSize, FontFamily } from '../../../styles/Font';
import styled from "styled-components";


export type FloatingActionButtonProps = {
    width?: number;
    height?: number;
    Color?: keyof typeof Color;
    backgroundColor: keyof typeof Color;
    borderColor: keyof typeof Color;
    position: string;
    fontSize: keyof typeof FontSize;
    fontFamily?: FontFamily;
    onClick: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = function (props) {
    const {
        width,
        height,
        Color,
        backgroundColor,
        borderColor,
        position,
        fontSize,
        fontFamily,
        onClick,
    } = props;
    return (
        <StyledFloatingActionButton
            width={width}
            height={height}
            Color={Color}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            position={position}
            fontSize={fontSize}
            fontFamily={fontFamily}
            onClick={() => onClick() }
        >
            出品
        </StyledFloatingActionButton>
    )
}
FloatingActionButton.defaultProps = {
    backgroundColor: 'White',
    borderColor: 'LightGray',
    fontSize: 'Medium',
    fontFamily: FontFamily.Roboto,
    position: 'fixed',
}
type StyledFloatingActionButtonProps = {
    width?: number;
    height?: number;
    Color?: keyof typeof Color;
    backgroundColor: keyof typeof Color;
    borderColor: keyof typeof Color;
    fontSize: keyof typeof FontSize;
    fontFamily?: FontFamily;
    borderRadius?: string;
}
const StyledFloatingActionButton = styled.button<StyledFloatingActionButtonProps>(props => `
    width: ${props.width ? props.width + 'px' : '100%'};
    height: ${props.height ? props.height + 'px' : '100%'};
    font-size: ${FontSize[props.fontSize]};
    font-family: ${props.fontFamily};
    border-radius:1;
    border:none;
    position: fixed;
    color:white;
    background-color:${Color.Primary};
    background-position: center;
    transition: background 0.9s;
    &:hover {
        background: #f75c02 radial-gradient(circle, transparent 1%, #f75c02 1%) center/15000%;
    }
    &:active{
        background-color: white;
        background-size: 50%;
        transition: background 0s;
    }
`);

export default FloatingActionButton