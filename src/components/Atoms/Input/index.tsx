import React from 'react';
import styled from 'styled-components';
import { FontSize, FontFamily } from '../../../styles/Font';
import Color from '../../../styles/Color';
import Space from "../../../styles/Space";

export type InputProps = {
    inputType: keyof typeof InputTypes;
    backgroundColor?: keyof typeof Color;
    borderColor?: keyof typeof Color;
    type?: string;
    fontSize?: keyof typeof FontSize;

    // input text props
    value: string|number;  // 必須
    customizedBorderRadius?: number;           // roundedが無効のときのみ有効。入力フォームに任意の丸みをもたせる。
    textOnChange?: (value: string) => void;
    width?: number;
    height?: number;
    name?: string;
    maxLength?: number;
    rounded?: boolean;
    fontFamily?: FontFamily;
    isReadOnly?: boolean;
    placeholder?: string;    
    borderWidth?: number;
    borderState: borderStateType;  
    
    // input file props
    fileOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    accept?: string;
    id?: string;
    noDisplay?: boolean;
    disabled?: boolean;
};

export enum borderStateType {
    default = 'default',
    under = 'under',
    none = 'none',
}

export enum InputTypes{
text = 'text',
file = 'file',
}

const Input: React.FC<InputProps> = (props) => {
    const {
        type,
        inputType ,
        width,
        height,
        backgroundColor = 'White',
        borderColor = 'LightGray',

        name,
        value,
        fontSize = 'Medium',
        fontFamily,
        maxLength,
        rounded,
        customizedBorderRadius,
        textOnChange= (value: string) => {},
        fileOnChange=(e: React.ChangeEvent<HTMLInputElement>) => {},
        placeholder,
        isReadOnly,
        borderWidth,
        borderState,

        accept, id = 'file-input',
        noDisplay, disabled= false,
    } = props;
    if(inputType=== InputTypes.text){
    return (
        <StyledInput
            type={type}
            onChange={(e) => {
                textOnChange(e.target.value);
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
            borderState={borderState}
            />
    );
}else if(inputType=== InputTypes.file){
    return(
            <StyledInput
            type={InputTypes.file}
            accept={accept} 
            id={id} 
            onChange={fileOnChange} 
            noDisplay={noDisplay} 
            disabled={disabled}
            
            fontSize={fontSize}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            />
    );
}
else{
    return <div>例外の値が入っています</div>
}
}

Input.defaultProps = {
   
    backgroundColor: 'White',
    borderColor: 'LightGray',
    type: "text",
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

    noDisplay?: boolean;
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
        display: ${(props.noDisplay) ? 'none' : 'inline'};
    `
});

export default Input;