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
}

const TextArea: React.FC<TextAreaProps> = (props) => {
    const {onChange = () => {},
           disabled = false,
           width,
           height,
           value,
           backgroundColor,
           fontSize,
        } = props;
    return (
        <StyledTextArea onChange={(e) => {onChange(e.target.value)}} 
                        disabled={disabled} 
                        width={width} 
                        height={height} 
                        backgroundColor={backgroundColor} 
                        fontSize={fontSize}>{value}</StyledTextArea>
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
}

const StyledTextArea = styled.textarea<StyledTextAreaProps>((props)=> `
    resize: none;
    width: ${(props.width) ? props.width + 'px' : '100%'};
    height: ${(props.height) ? props.height + 'px' : '100%'};
    background-color: ${(props.backgroundColor) ? Color[props.backgroundColor] : Color.WhiteSmoke};
    font-size: ${(props.fontSize) ? FontSize[props.fontSize] : FontSize.Medium};
    box-sizing: border-box;
`);

export default TextArea;
