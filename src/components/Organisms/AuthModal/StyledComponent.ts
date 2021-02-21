import React from 'react';
import styled from 'styled-components';
import Color from '../../../styles/Color';

type TitleAreaProps = {
    height: string;
}

export const TitleArea = styled.div<TitleAreaProps>(props => `
    height: ${props.height};
    padding: auto;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
`);

type FormAreaProps = {
    height: string;
}

export const FormArea = styled.div<FormAreaProps> (props => `
    width: 75%;
    height: ${props.height};
`) 

type ButtonAreaProps = {
    height: string;
}

export const ButtonArea = styled.div<ButtonAreaProps>(props => `
    width: calc(420px*0.80);
    height: ${props.height};
`)

type LogoSpaceProps = {
}

export const LogoSpace = styled.div<LogoSpaceProps>(props => `
    width: 60%;
    margin: auto;
    margin-top: 20%;
`);

type FormElementProps = {
    height: string;
    width: string;
}

export const FormElement = styled.div<FormElementProps>(props => `
    height: ${props.height};
    width: ${props.width};
`);

type ButtonElementProps = {
    marginTop: string,
    height: string,
    width: string
}

export const ButtonElement = styled.div<ButtonElementProps>(props => `
    margin-top: ${props.marginTop};
    height: ${props.height};
    width: ${props.width};
`);