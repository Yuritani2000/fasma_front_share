import React from 'react';
import styled from 'styled-components';
import { FontSize, FontFamily } from '../../styles/Font';
import Color from '../../styles/Color';

type FormProps = {
    width?: string;
    height?: string;
    color?: Color;
    type?: string;
    name?: string;
    value: string;  // 必須
    size?: number;
    fontSize?: FontSize;
    fontFamily?: FontFamily;
    maxLength?: number;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;   // 必須
    placeholder?: string;
    borderRadius?: string;
}

const Form: React.FC<FormProps> = (props) => {
    const { width = '100%',
            height = '100%',
            color = Color.WhiteSmoke,
            type = 'text',
            name = '',
            value,
            size = 30,
            fontSize = FontSize.Medium,
            fontFamily = FontFamily.Roboto,
            maxLength = 30,
            onChange,
            placeholder = '', 
            borderRadius = '0px' } = props;
    return (
        <StyledForm type={type} 
                    onChange={onChange} 
                    value={value}
                    fontSize={fontSize}
                    fontFamily={fontFamily}
                    width={width}
                    height={height}
                    color={color}
                    name={name}
                    maxLength={maxLength}
                    size={size}
                    placeholder={placeholder}
                    borderRadius={borderRadius}
        />

    );
}

export default Form;

type StyledFormProps = {
    width: string;
    height: string;
    color: Color;
    value: string;
    fontSize: FontSize;
    fontFamily: FontFamily;
    borderRadius: string;
}

const StyledForm = styled.input<StyledFormProps>(props => `
    width: ${props.width};
    height: ${props.height};
    font-size: ${props.fontSize}px;
    font-family: ${props.fontFamily};
    background-color: ${props.color};
    border-radius: ${props.borderRadius};
`);