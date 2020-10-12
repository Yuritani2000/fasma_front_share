import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import Color from '../../../styles/Color';
import { FontFamily, FontSize } from '../../../styles/Font';


// Modalの実装に必要なコンポーネントたちを考える。
// 仮用のボタン
type ButtonProps = {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    color?: Color;
}
  
export const Button: React.FC<ButtonProps> = (props) => {
    const { label = 'TEST', onClick = () =>{}, color = Color.WhiteSmoke} = props;
    return (
        <StyledButton onClick={onClick} color={color}>{label}</StyledButton>
    );
}

// ボタンのスタイル
type StyledButtonProps = {
    color: Color;
}

const StyledButton = styled.button<StyledButtonProps>(props => `
    background-color: ${props.color};
    border-radius: 10px ;
    text-align: center;
    width: 260px;
    height: 30px;
`);



// 仮用のフォーム(Atomsにプルリクを出しているものと仕様をそろえる)
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

export const Form: React.FC<FormProps> = (props) => {
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

// フォームのスタイル

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


// モーダルのベースになるウィンドウ(詳細は今調べる)