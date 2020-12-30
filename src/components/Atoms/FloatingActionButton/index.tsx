import React from "react";
import Color from "../../../styles/Color";
import { FontSize, FontFamily } from '../../../styles/Font';
import styled from "styled-components";

export type FloatingActionButtonProps = {
    width?: number;
    height?: number;
    label: string;
    color?: Color;
    backgroundColor?: Color;
    fontSize?: FontSize;
    fontFamily?: FontFamily;
    handleClick?: () => void;
}

const StyledFloatingActionButton = styled.button<FloatingActionButtonProps>(props => `
    position: fixed;
    top:auto;
    bottom:20px;
    right:20px;
    left:auto;
    width: ${props.width ? props.width + 'px' : '100%'};
    height: ${props.height ? props.height + 'px' : '100%'};
    font-size: ${props.fontSize};
    font-family: ${props.fontFamily};
    border-radius:50%;
    border:none;
    color:${props.color};
    background-color:${props.backgroundColor};
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

const FloatingActionButton: React.FC<FloatingActionButtonProps> = function (props) {
    const {
        width,
        height,
        label,
        color,
        backgroundColor,
        fontSize,
        fontFamily,
        handleClick,
    } = props;

    return (
        <StyledFloatingActionButton
            width={width}
            height={height}
            color={color}
            label={label}
            backgroundColor={backgroundColor}
            fontSize={fontSize}
            fontFamily={fontFamily}
            onClick={handleClick}
        >
            {label}
        </StyledFloatingActionButton>
    )
}

FloatingActionButton.defaultProps = {
    width: 100,
    height: 100,
    color: Color.White,
    backgroundColor: Color.Primary,
    fontSize: FontSize.Large,
    fontFamily: FontFamily.Roboto,
}

export default FloatingActionButton