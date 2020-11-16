import React, { ReactText } from 'react';
import styled from 'styled-components';
import Color from '../../../styles/Color';
import { FontFamily, FontSize } from '../../../styles/Font';


export type TextProps = {
    children?: ReactText;
    textType?: TextTypes;
    size?: FontSize;
    disabled?: boolean;
    handleClick?: () => void;
    link?: boolean;
    textAlign?: "left" | "center" | "right";
    fontFamily?: FontFamily;
};

export enum TextTypes {
    primary = 'primary',
    warning = 'warning',
    danger = 'danger',
};

const StyledText = styled.div<TextProps>`
  font-size: ${(props) => props.size};
  font-family: ${(props) => props.fontFamily};
  text-align: ${(props) => props.textAlign};

  /* color */
  color: ${(props) => props.textType === TextTypes.primary ? Color.Black : ""};
  color: ${(props) => props.textType === TextTypes.warning ? Color.Warn : ""};
  color: ${(props) => props.textType === TextTypes.danger ? Color.Danger : ""};

  &:disabled {
    color: ${(props) => props.disabled ? Color.White : ""};
    cursor: not-allowed;
  }
`;

const Text: React.FC<TextProps> = (props) => {
    const {
        children,
        fontFamily,
        textType,
        size,
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
    size: FontSize.Medium,
    fontFamily: FontFamily.Roboto,
    textAlign: "left",
    textType: TextTypes.primary,
    disabled: false,
};

export default Text;

