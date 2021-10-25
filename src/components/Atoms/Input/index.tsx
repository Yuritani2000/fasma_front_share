import React from 'react';
import styled from 'styled-components';
import { FontSize, FontFamily } from '../../../styles/Font';
import Color from '../../../styles/Color';
import Space from "../../../styles/Space";

export enum borderStateType {
    default = 'default',
    under = 'under',
    none = 'none'
}
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
    customizedBorderRadius?: number;           // roundedが無効のときのみ有効。入力フォームに任意の丸みをもたせる。
    onChange: (value: string) => void;   // 必須
    placeholder?: string;
    isReadOnly?: boolean;
    borderWidth?: number;
    borderState?: borderStateType; 
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
        customizedBorderRadius,
        onChange,
        placeholder,
        isReadOnly,
        borderWidth,
        borderState,
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
            customizedBorderRadius={customizedBorderRadius}
            placeholder={placeholder}
            readOnly={isReadOnly}
            borderWidth={borderWidth}
            borderState={borderState}/>
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
    customizedBorderRadius: 4,
    placeholder:'',
    isReadOnly: false,
    borderWidth: 1,
    borderState: borderStateType.default,
}

type StyledInputProps = {
    width?: number;
    height?: number;
    backgroundColor: keyof typeof Color;
    borderColor: keyof typeof Color;
    fontSize: keyof typeof FontSize;
    fontFamily?: FontFamily;
    rounded?: boolean;
    customizedBorderRadius?: number;
    borderWidth?: number;
    borderState?: borderStateType;
}

const StyledInput = styled.input<StyledInputProps>(props => {
    const { width,
            height,
            backgroundColor,
            borderColor,
            fontSize,
            fontFamily,
            rounded,
            customizedBorderRadius,
            borderWidth,
            borderState,
        } = props;
    return`
        width: ${width?width+'px':'100%'};
        height: ${height?height+'px':'100%'};
        font-size: ${FontSize[fontSize]};
        font-family: ${fontFamily};
        background-color: ${Color[backgroundColor]};
        padding: ${Space.TINY} ${Space.SMALL};
        border-radius: ${rounded ? "100px" : (customizedBorderRadius) ? customizedBorderRadius + "px" : "4px"};
        box-sizing: border-box;
        border-top: ${(borderState === 'under' || borderState === 'none') ? 'none' : 'solid'};
        border-right: ${(borderState === 'under' || borderState === 'none') ? 'none' : 'solid'};
        border-left: ${(borderState === 'under' || borderState === 'none') ? 'none' : 'solid'};
        border-bottom: ${(borderState === 'none') ? 'none' : 'solid'};
        border-width: ${(borderWidth) ? borderWidth + 'px' : '1px'};
        border-color: ${Color[borderColor]};
        &:focus {
            border: 1px solid ${Color[backgroundColor]};
        }
    `
});

export default Input;