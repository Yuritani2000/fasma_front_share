import React from 'react';
import styled from 'styled-components';
import { FontSize, FontFamily } from '../../../styles/Font';
import Color from '../../../styles/Color';
import Space from "../../../styles/Space";

export type InputProps = {
    width?: number;
    height?: number;
    backgroundColor?: Color;
    borderColor?: Color;
    type?: string;
    name?: string;
    value: string;  // 必須
    fontSize?: FontSize;
    fontFamily?: FontFamily;
    maxLength?: number;
    rounded?: boolean;
    onChange: (value: string) => void;   // 必須
    placeholder?: string;
};

const Input: React.FC<InputProps> = function(props) {
    const {
        width,
        height,
        backgroundColor,
        borderColor,
        type,
        name,
        value,
        fontSize,
        fontFamily,
        maxLength,
        rounded,
        onChange,
        placeholder,
    } = props;
    return (
        <StyledInput
            type={type}
            onChange={(e) => {
                onChange(e.target.value);
            }}
            value={value}
            fontSize={fontSize}
            fontFamily={fontFamily}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            name={name}
            maxLength={maxLength}
            rounded={rounded}
            placeholder={placeholder}/>

    );
};

Input.defaultProps = {
    backgroundColor: Color.White,
    borderColor: Color.LightGray,
    type: 'text',
    name: '',
    fontSize: FontSize.Medium,
    fontFamily: FontFamily.Roboto,
    maxLength: 30,
    rounded: false,
    placeholder:'',
}

type StyledInputProps = {
    width?: number;
    height?: number;
    backgroundColor?: Color;
    borderColor?: Color;
    value?: string;
    fontSize?: FontSize;
    fontFamily?: FontFamily;
    borderRadius?: string;
    rounded?: boolean;
}

const StyledInput = styled.input<StyledInputProps>(props => `
    width: ${props.width?props.width+'px':'100%'};
    height: ${props.height?props.height+'px':'100%'};
    font-size: ${props.fontSize};
    font-family: ${props.fontFamily};
    background-color: ${props.backgroundColor};
    border-color: ${props.borderColor};
    padding: ${Space.TINY} ${Space.SMALL};
    border-radius: ${props.rounded ? "100px" : "3px"};
`);

export default Input;