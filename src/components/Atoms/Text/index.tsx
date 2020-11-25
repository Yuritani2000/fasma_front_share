import React, { ReactText } from 'react';
import styled from 'styled-components';
import Color from '../../../styles/Color';
import { FontFamily, FontSize } from '../../../styles/Font';

export enum TextTypes {
    Default = Color.Black,
    Primary = Color.Primary,
    Warning = Color.Warn,
    Danger = Color.Danger,
};

export type StyledTextProps = {
    children?: ReactText;
    handleClick?: () => void;
    textType: keyof typeof TextTypes;
    size: keyof typeof FontSize;
    disabled?: boolean;
    link?: boolean;
    textAlign?: "left" | "center" | "right";
    fontFamily?: keyof typeof FontFamily;
};

const StyledText = styled.div<StyledTextProps>(props => `
  font-size: ${FontSize[props.size]};
  font-family: ${props.fontFamily};
  text-align: ${props.textAlign};
  cursor: pointer;
  /* color */
  color: ${TextTypes[props.textType]};
  &:hover {
    text-decoration: ${props.link ? "underline" : "none"};
    cursor: ${props.link ? "pointer" : "default"};
  }
  &:disabled {
    background-color: ${props.disabled ? Color.Disabled : ""};
    color: ${props.disabled ? Color.White : ""};
    cursor: not-allowed;
  }
`);

const Text: React.FC<StyledTextProps> = function (props){
    const {
        children,
        fontFamily,
        textType = 'Default',
        size = 'Medium',
        handleClick,
        disabled,
        textAlign,
    } = props;
    return (
        <StyledText
            size={size}
            onClick={handleClick}
            disabled={disabled}
            fontFamily={fontFamily}
            textAlign={textAlign}
            textType={textType}
        >
            {children}
        </StyledText>
    )
}

Text.defaultProps = {
    size: 'Medium',
    fontFamily: FontFamily.Roboto,
    textAlign: 'left',
    textType: 'Default',
    disabled: false,
    link: false,
};

export default Text;