import React from "react";
import Color from "../../../styles/Color";
import { FontSize, FontFamily } from '../../../styles/Font';
import styled from "styled-components";

export type FloatingActionButtonProps = {
    width?: number;
    height?: number;
    label: string;
    Color?: keyof typeof Color;
    backgroundColor?: keyof typeof Color;
    borderColor?: keyof typeof Color;
    fontSize?: keyof typeof FontSize;
    fontFamily?: keyof typeof FontFamily;
    handleClick?: () => void;
}

export type StyledFloatingActionButtonProps = {
    width?: number;
    height?: number;
    label: string;
    Color?: keyof typeof Color;
    backgroundColor?: keyof typeof Color;
    borderColor?: keyof typeof Color;
    fontSize?: keyof typeof FontSize;
    fontFamily?: keyof typeof FontFamily;
    handleClick?: () => void;
}

const StyledFloatingActionButton = styled.button<StyledFloatingActionButtonProps>(props => `
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

const FloatingActionButton: React.FC<FloatingActionButtonProps> = function (props) {
    const {
        width,
        height,
        label,
        Color,
        backgroundColor,
        borderColor,
        fontSize,
        fontFamily,
        handleClick,
    } = props;

    return (
        <StyledFloatingActionButton
            width={width}
            height={height}
            Color={Color}
            label={label}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
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
    Color: 'White',
    backgroundColor: 'White',
    borderColor: 'LightGray',
    fontSize: 'Large',
    fontFamily: 'Roboto',
}

export default FloatingActionButton