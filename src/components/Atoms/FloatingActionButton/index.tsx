import React from "react";
import Color from "../../../styles/Color";
import { FontSize, FontFamily } from '../../../styles/Font';
import styled from "styled-components";

export type FloatingActionButtonProps = {
    size?: number;
    label: string;
    color?: keyof typeof Color;
    backgroundColor?: Color;
    fontSize?: keyof typeof FontSize;
    fontFamily?: keyof typeof FontFamily;
    handleClick?: () => void;
}

const StyledFloatingActionButton = styled.button<FloatingActionButtonProps>(props => `
    position: fixed;
    top:auto;
    bottom:20px;
    right:20px;
    left:auto;
    width: ${props.size ? props.size + 'px' : '100%'};
    height: ${props.size ? props.size + 'px' : '100%'};
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
    &:focus {
    outline: none;
}
`);

const FloatingActionButton: React.FC<FloatingActionButtonProps> = function (props) {
    const {
        size,
        label,
        color,
        backgroundColor,
        fontSize,
        fontFamily,
        handleClick,
    } = props;

    return (
        <StyledFloatingActionButton
            size={size}
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
    size: 100,
    color: 'White',
    backgroundColor: Color.Primary,
    fontSize: 'Large',
    fontFamily: 'Roboto',
}

export default FloatingActionButton