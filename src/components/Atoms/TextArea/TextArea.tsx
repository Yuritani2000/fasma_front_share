import styled from 'styled-components';
import React from 'react';
import Color from '../../../styles/Color';
import { FontSize } from '../../../styles/Font';

export type TextAreaProps = {
    onChange: (value: string) => void;
    disabled?: boolean;
    width?: number;
    height?: number;
    value?: string;
    backgroundColor?: keyof typeof Color;
    fontSize?: keyof typeof FontSize;
    isReadOnly?: boolean;
    borderRadius?: number;
    borderState?: number;               // borderState: 境界線の表示に関する状態 0: 上下左右すべて表示  1: 下の境界線のみ表示  2: 上下左右すべて非表示  それ以外: すべて表示
    borderWidth?: number;
    borderColor?: keyof typeof Color;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
    const {onChange = () => {},
           disabled = false,
           width,
           height,
           value,
           backgroundColor,
           fontSize,
           isReadOnly,
           borderRadius,
           borderState,
           borderWidth,
           borderColor,
        } = props;
    return (
        <StyledTextArea onChange={(e) => {onChange(e.target.value)}} 
                        disabled={disabled} 
                        width={width} 
                        height={height} 
                        value={value}
                        backgroundColor={backgroundColor} 
                        fontSize={fontSize}
                        readOnly={isReadOnly}
                        borderRadius={borderRadius}
                        borderState={borderState}
                        borderWidth={borderWidth}
                        borderColor={borderColor}/>
    );
}

type StyledTextAreaProps = {
    width?: number,
    height?: number
    backgroundColor?: keyof typeof Color;
    fontSize?: keyof typeof FontSize;
    shouldShowBorderTop?: boolean;
    shouldShowBorderRight?: boolean;
    shouldShowBorderBottom?: boolean;
    shouldShowBorderLeft?: boolean;
    borderRadius?: number;
    borderState?: number;
    borderWidth?: number;
    borderColor?: keyof typeof Color;
}

const StyledTextArea = styled.textarea<StyledTextAreaProps>((props)=> `
    resize: none;
    width: ${(props.width) ? props.width + 'px' : '100%'};
    height: ${(props.height) ? props.height + 'px' : '100%'};
    background-color: ${(props.backgroundColor) ? Color[props.backgroundColor] : Color.WhiteSmoke};
    font-size: ${(props.fontSize) ? FontSize[props.fontSize] : FontSize.Medium};
    box-sizing: border-box;
    border-radius: ${(props.borderRadius) ? props.borderRadius + 'px' : '4px'};
    border-top: ${(props.borderState == 1 || props.borderState == 2) ?  'none' : 'solid'};
    border-right: ${(props.borderState == 1 || props.borderState == 2) ? 'none' : 'solid'};
    border-left: ${(props.borderState == 1 || props.borderState == 2) ?  'none' : 'solid'};
    border-bottom: ${(props.borderState == 2 ) ?  'none' : 'solid'};
    border-width: ${(props.borderWidth) ? props.borderWidth + 'px' : '1px'};
    border-color: ${(props.borderColor) ? Color[props.borderColor] : Color.Black};
`);

export default TextArea;
