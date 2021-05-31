/**
 *
 * Button
 *
 */

import React from "react";
import styled from "styled-components";



// utils
import Space from "../../../styles/Space";
import Color from "../../../styles/Color";
import { FontSize } from "../../../styles/Font";

export type ButtonPropsMap = {
  // Buttonの要素
  label?: string;
  width?: number;
  diameter?: string; // CircleButton用。Modalではcm指定のため、string型で単位を指定しない決め方にする。
  buttonShape?: ButtonShapes;
  buttonType?: ButtonTypes;
  specClass?: string;
  fontColor?: Color;
  fontSize?: FontSize;
  disabled?: boolean;
  rounded?: boolean;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export enum ButtonShapes {
  rect = 'rect',
  circle = 'circle',
};

export enum ButtonTypes {
  primary = 'primary',
  warning = 'warning',
  danger = 'danger',
  info = 'info',
  text = 'text',
  secondary = 'secondary',
};

const StyledButton = styled.button<ButtonPropsMap>((props) => `
  flex-flow: row nowrap;
  align-self: center;
  align-items: center;
  outline: none;
  border-width: 0;
  transition-duration: 0.2s;
  text-align: center;
  cursor: pointer;
  font-weight: bold;

  > *:first-child {
    margin-right: ${Space.SMALL};
  }

  width: ${(props.buttonShape === ButtonShapes.circle
    ? props.diameter
    : (props.width
      ? props.width + "px"
      : "100%"))};

  height: ${(props.buttonShape === ButtonShapes.circle && props.diameter
    ? props.diameter
    : "0.97cm")};

  border-radius: ${(props.buttonShape === ButtonShapes.circle
    ? "50%"
    : (props.rounded
      ? "100px"
      : "3px"))};

  padding: ${props.fontSize === FontSize.Tiny
    ? `${Space.TINY} ${Space.TINY}`
    : ""};
  padding: ${props.fontSize === FontSize.Small
    ? `${Space.TINY} ${Space.SMALL}`
    : ""};
  padding: ${props.fontSize === FontSize.Medium || props.fontSize === FontSize.H3
    ? `${Space.SMALL} ${Space.BASE}`
    : ""};
  padding: ${props.fontSize === FontSize.Large || props.fontSize === FontSize.H2
    ? `${Space.BASE} ${Space.LARGE}`
    : ""};
  padding: ${(props.buttonType === ButtonTypes.text
    ? "0"
    : "")};
  padding: ${(props.buttonShape === ButtonShapes.circle
    ? "none"
    : "")};

  background: ${(props.buttonType === ButtonTypes.primary
    ? Color.Primary
    : "")};
  background: ${(props.buttonType === ButtonTypes.warning
    ? Color.Warn
    : "")};
  background: ${(props.buttonType === ButtonTypes.danger
    ? Color.Danger
    : "")};
  background: ${(props.buttonType === ButtonTypes.info
    ? Color.White
    : "")};
  background: ${(props.buttonType === ButtonTypes.text
    ? "none"
    : "")};
  background: ${(props.buttonType === ButtonTypes.secondary
    ? Color.Secondary
    : "")};
  
  color: ${(props.buttonShape === ButtonShapes.rect && props.buttonType === ButtonTypes.info
    ? Color.Gray
    : Color.White)};
  color: ${(props.buttonShape === ButtonShapes.rect && props.buttonType === ButtonTypes.text
    ? Color.Black
    : "")};
  color: ${(props.buttonShape === ButtonShapes.rect && props.buttonType === ButtonTypes.secondary
    ? Color.Black
    : "")};
  color: ${(props.color === Color.Success && props.buttonType === ButtonTypes.text
    ? Color.Success
    : "")};
  color: ${(props.color === Color.Danger && props.buttonType === ButtonTypes.text
    ? Color.Danger
    : "")};
  color: ${(props.color === Color.Inactive && props.buttonType === ButtonTypes.text
    ? Color.Inactive
    : "")};

  border: ${(props.buttonShape === ButtonShapes.rect && props.buttonType === ButtonTypes.info
    ? `1px solid ${Color.LightGray}`
    : "")};
  border: ${(props.buttonShape === ButtonShapes.circle
    ? "none"
    : "")};

  // CircleButtonのデフォルトを追加
  font-size: ${(props.buttonShape === ButtonShapes.circle
    ? props.fontSize
    : FontSize.H1)};
  font-size: ${(props.buttonShape === ButtonShapes.rect
    ? props.fontSize
    : "")};

  line-height: ${(props.buttonShape === ButtonShapes.circle
    ? props.diameter
    : props.fontSize)};

  &:hover {
    font-weight: ${(props.disabled ? "" : "bold")};
  }

  &:disabled {
    background-color: ${props.buttonType !== ButtonTypes.text && props.disabled
      ? Color.Disabled
      : ""};
    color: ${props.buttonType === ButtonTypes.text && props.disabled
      ? Color.White
      : ""};
    cursor: not-allowed;
  }
`);

const Button: React.FC<ButtonPropsMap> = function (props) {
  const {
    label,
    specClass,
    width,
    diameter,
    buttonShape,
    buttonType,
    fontColor,
    fontSize,
    disabled,
    rounded,
    handleClick,
  } = props;
  return (
    <StyledButton
      className={specClass}
      width={width}
      diameter={diameter}
      buttonShape={buttonShape}
      buttonType={buttonType}
      disabled={disabled}
      rounded={rounded}
      fontColor={fontColor}
      fontSize={fontSize}
      onClick={handleClick}
    >
      {label}
    </StyledButton>
  );
};

Button.defaultProps = {
  buttonShape: ButtonShapes.rect,
  buttonType: ButtonTypes.primary,
  fontSize: FontSize.Medium,
  disabled: false,
  rounded: false,
};

export default Button;
