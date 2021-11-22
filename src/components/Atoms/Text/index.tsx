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
    maxLines?: number;
    isOmitted?: boolean;
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

  height: max-content;
  width: 100%;

  /* styles to omit sentences */
  overflow: ${props.isOmitted ? 'hidden' : 'visible'};

  /* when omit into one line */
  white-space: ${(props.maxLines && props.maxLines === 1 && props.isOmitted) ? 'nowrap' : 'normal'};
  text-overflow: ${(props.maxLines && props.maxLines === 1 && props.isOmitted) ? 'ellipsis' : 'clip'};

  /* when omit into multiple lines */
  display: ${(props.maxLines && props.maxLines > 1 && props.isOmitted) ? '-webkit-box' : 'block'};
  -webkit-box-orient: ${(props.maxLines && props.maxLines > 1 && props.isOmitted) ? 'vertical' : 'inline-axis'};
  ${(props.maxLines && props.maxLines > 1 && props.isOmitted) ? '-webkit-line-clamp: ' + (props.maxLines) + ';' : ''}

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
        maxLines = 1,
        isOmitted = true,
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
            maxLines={maxLines}
            isOmitted={isOmitted}
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