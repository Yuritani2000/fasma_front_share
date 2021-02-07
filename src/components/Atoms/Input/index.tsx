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
    customizedBorderRadius?: number;           // roundedが無効のときのみ有効。入力フォームに任意の丸みをもたせる。
    onChange: (value: string) => void;   // 必須
    placeholder?: string;
    isReadOnly?: boolean;
    borderWidth?: number;
    borderState?: number;                   // 境界線の状態を決めるprops. 0: すべての境界線を表示, 1: 下側の境界線のみ表示, 2: すべての境界線を非表示, それ以外: すべての境界線を表示
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
    borderState: 0,
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
    customizedBorderRadius?: number;
    borderWidth?: number;
    borderState?: number;
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
    border-radius: ${props.rounded ? "100px" : (props.customizedBorderRadius) ? props.customizedBorderRadius + "px" : "4px"};
    box-sizing: border-box;
    border-top: ${(props.borderState == 1 || props.borderState == 2) ? 'none' : 'solid'};
    border-right: ${(props.borderState == 1 || props.borderState == 2) ? 'none' : 'solid'};
    border-left: ${(props.borderState == 1 || props.borderState == 2) ? 'none' : 'solid'};
    border-bottom: ${(props.borderState == 2) ? 'none' : 'solid'};
    border-width: ${(props.borderWidth) ? props.borderWidth + 'px' : '1px'};
`);

export default Input;