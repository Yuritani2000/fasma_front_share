import React from 'react';
import styled from 'styled-components';
import Color from '../../../styles/Color';

// Modalの実装に必要なコンポーネントたちを考える。
// 仮用のボタン
type StyledButtonProps = {
    width: string;
    height: string;
    borderRadius: string;
    backgroundColor: string;
    fontColor: string;
}

export const StyledButton = styled.button<StyledButtonProps> (props => `
    background: ${props.backgroundColor};
    font-size: 1.2em;
    width: ${props.width};
    height: ${props.height};
    border: none;
    border-radius: ${props.borderRadius}; 
    color: ${props.fontColor};
    font-weight: bold;
`);

type StyledFormProps = {
    width: string;
    height: string;
    borderRadius: string;
    fontSize: string;
}

export const StyledForm = styled.input<StyledFormProps> ( props => `
    width: ${props.width};
    height: ${props.height};
    border-radius: ${props.borderRadius};
    font-size: ${props.fontSize};
    padding: 0px;
    box-sizing: border-box;
`);
