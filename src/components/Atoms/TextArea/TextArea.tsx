import styled from 'styled-components';
import React from 'react';
import Color from '../../../styles/Color';
import { FontSize } from '../../../styles/Font';

type TextAreaProps = {
    onChange: (value: string) => void;
    disabled?: boolean;
    width?: number;
    height?: number;
    value?: string;
    backgroundColor?: Color;
    fontSize?: keyof typeof FontSize;
    shouldShowBorderTop?: boolean;
    shouldShowBorderRight?: boolean;
    shouldShowBorderBottom?: boolean;
    shouldShowBorderLeft?: boolean;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
    const {onChange = () => {},
           disabled = false,
           width,
           height,
           value,
           backgroundColor,
           fontSize,
           shouldShowBorderTop,
           shouldShowBorderRight,
           shouldShowBorderBottom,
           shouldShowBorderLeft,
        } = props;
    return (
        <StyledTextArea value={value} onChange={(e) => {onChange(e.target.value)}} disabled={disabled} width={width} height={height}/>
    );
}

type StyledTextAreaProps = {
    width?: number,
    height?: number
    backgroundColor?: Color;
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
    background-color: ${(props.backgroundColor) ? props.backgroundColor : Color.WhiteSmoke};
    font-size: ${(props.fontSize) ? props.fontSize : FontSize.Medium};
    box-sizing: border-box;
`);

export default TextArea;
