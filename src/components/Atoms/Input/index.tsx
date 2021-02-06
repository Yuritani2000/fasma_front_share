import React from 'react';
import styled from 'styled-components';
import { FontSize, FontFamily } from '../../../styles/Font';
import Color from '../../../styles/Color';
import Space from "../../../styles/Space";

export type InputProps = {
    width?: number;
    height?: number;
    backgroundColor?: keyof typeof Color;
    borderColor?: keyof typeof Color;
    type?: string;
    name?: string;
    value: string;  // 必須
    fontSize?: keyof typeof FontSize;
    fontFamily?: FontFamily;
    maxLength?: number;
    rounded?: boolean;
    onChange: (value: string) => void;   // 必須
    placeholder?: string;
    isReadOnly?: boolean;
    shouldShowOnlyBottomBorder?: boolean;
};

const Input: React.FC<InputProps> = function(props) {
    const {
        width,
        height,
        backgroundColor = 'White',
        borderColor = 'LightGray',
        type,
        name,
        value,
        fontSize = 'Medium',
        fontFamily,
        maxLength,
        rounded,
        onChange,
        placeholder,
        isReadOnly,
        shouldShowOnlyBottomBorder,
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
            placeholder={placeholder}
            readOnly={isReadOnly}
            shouldShowOnlyBottomBorder={shouldShowOnlyBottomBorder}/>
    );
};

Input.defaultProps = {
    backgroundColor: 'White',
    borderColor: 'LightGray',
    type: 'text',
    name: '',
    fontSize: 'Medium',
    fontFamily: FontFamily.Roboto,
    maxLength: 30,
    rounded: false,
    placeholder:'',
    isReadOnly: false,
    shouldShowOnlyBottomBorder: false,
}

type StyledInputProps = {
    width?: number;
    height?: number;
    backgroundColor: keyof typeof Color;
    borderColor: keyof typeof Color;
    value?: string;
    fontSize: keyof typeof FontSize;
    fontFamily?: FontFamily;
    borderRadius?: string;
    rounded?: boolean;
    shouldShowOnlyBottomBorder?: boolean;
}

const StyledInput = styled.input<StyledInputProps>(props => `
    width: ${props.width?props.width+'px':'100%'};
    height: ${props.height?props.height+'px':'100%'};
    font-size: ${FontSize[props.fontSize]};
    font-family: ${props.fontFamily};
    background-color: ${Color[props.backgroundColor]};
    border: 1px solid ${Color[props.borderColor]};
    &:focus {
      border: 1px solid ${Color[props.backgroundColor]};
    }
    padding: ${Space.TINY} ${Space.SMALL};
    border-radius: ${props.rounded ? "100px" : "4px"};
    box-sizing: border-box;
    border-top-style: ${(props.shouldShowOnlyBottomBorder) ? (props.shouldShowOnlyBottomBorder == true) ? 'none' : 'solid' : 'solid'};
    border-right-style: ${(props.shouldShowOnlyBottomBorder) ? (props.shouldShowOnlyBottomBorder == true) ? 'none' : 'solid' : 'solid'};
    border-left-style: ${(props.shouldShowOnlyBottomBorder) ? (props.shouldShowOnlyBottomBorder == true) ? 'none' : 'solid' : 'solid'};
    border-bottom-style: solid;
`);

export default Input;