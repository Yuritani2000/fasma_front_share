import React, { ReactText } from 'react';
import styled from 'styled-components';
import Color from '../../../styles/Color';
import { FontFamily, FontSize } from '../../../styles/Font';

export enum TextTypes {
    Default = Color.Black,
    Primary = Color.Primary,
    Warning = Color.Warn,
    Danger = Color.Danger,
    Tag = Color.Ashen,
};

export type TextProps = {
    children?: ReactText;
    handleClick?: () => void;
    textType: keyof typeof TextTypes;
    size: keyof typeof FontSize;
    disabled?: boolean;
    link?: boolean;
    textAlign?: "left" | "center" | "right";
    fontFamily?: keyof typeof FontFamily;
    omit?: boolean;
    omittingLineNumber?: number;
    isBold?: boolean;
};

const StyledText = styled.div<TextProps>(props => `
  font-size: ${FontSize[props.size]};
  font-family: ${props.fontFamily};
  text-align: ${props.textAlign};
  cursor: default;
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

  /* styles to omit sentences */
  overflow: ${(props.omit) ? 'hidden' : 'visible'};

  /* when omit into one line */
  white-space: ${(props.omit) ? (props.omittingLineNumber) ? (props.omittingLineNumber === 1) ? 'nowrap' : 'normal' : 'normal' : 'normal'};
  text-overflow: ${(props.omit) ? (props.omittingLineNumber) ? (props.omittingLineNumber === 1) ? 'ellipsis' : 'clip' : 'clip' : 'clip'};

  /* when omit into multiple lines */
  display: ${(props.omit) ? (props.omittingLineNumber) ? (props.omittingLineNumber > 1) ? '-webkit-box' : 'block' : 'inline' : 'inline'};
  -webkit-box-orient: ${(props.omit) ? (props.omittingLineNumber) ? (props.omittingLineNumber > 1) ? 'vertical' : 'inline-axis' : 'inline-axis' : 'inline-axis'};
  -webkit-line-clamp: ${(props.omit) ? (props.omittingLineNumber) ? (props.omittingLineNumber > 1) ? (props.omittingLineNumber) : 'none' : 'none' : 'none'};

  /*set font-weight*/
  font-weight: ${(props.isBold) ? 'bold' : 'normal'};
`);

const Text: React.FC<TextProps> = function (props) {
    const {
        children,
        fontFamily,
        textType = 'Default',
        size = 'Medium',
        handleClick,
        disabled,
        link,
        textAlign,
        omit,
        omittingLineNumber = 1,
        isBold,
    } = props;
    return (
        <StyledText
            size={size}
            onClick={handleClick}
            disabled={disabled}
            fontFamily={fontFamily}
            link={link}
            textAlign={textAlign}
            textType={textType}
            omit={omit}
            omittingLineNumber={omittingLineNumber}
            isBold={isBold}
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