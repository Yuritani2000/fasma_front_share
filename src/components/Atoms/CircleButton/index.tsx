import React from 'react';
import styled from 'styled-components';
import Color from '../../../styles/Color';
import { FontSize } from '../../../styles/Font';

export type CircleButtonProps = {
    diameter: string;   // Modalではcm指定のため、string型で単位を指定しない決め方にする。
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    backgroundColor?: keyof typeof Color;
    fontColor?: keyof typeof Color;
    label?: string;
    fontSize?: keyof typeof FontSize;
}

const CircleButton: React.FC<CircleButtonProps> = (props) => {
    const {
        diameter,
        handleClick,
        backgroundColor,
        fontColor,
        label = '',
        fontSize,
    } = props;
    return (
        <StyledButton   onClick={handleClick}
                        diameter={diameter}
                        backgroundColor={backgroundColor}
                        fontColor={fontColor}
                        fontSize={fontSize}>
            {label}
        </StyledButton>
    );
}

type StyledButtonProps = {
    diameter: string;
    backgroundColor?: keyof typeof Color;
    fontColor?: keyof typeof Color;
    fontSize?: keyof typeof FontSize;
}

const StyledButton = styled.button<StyledButtonProps>((props)=> `
    width: ${props.diameter};
    height: ${props.diameter};
    text-align: center
    line-height: ${props.diameter};
    color: ${(props.fontColor) ? Color[props.fontColor] : Color.Black};
    background-color: ${(props.backgroundColor) ? Color[props.backgroundColor] : Color.Secondary};
    border-radius: 50%;
    font-weight: bold;
    border: none;
    font-size: ${(props.fontSize) ? FontSize[props.fontSize] : FontSize.H1};
    outline: none;
    cursor: pointer;
`)

export default CircleButton;