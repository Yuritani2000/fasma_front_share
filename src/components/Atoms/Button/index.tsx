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
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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

const StyledButton = styled.button<ButtonPropsMap>`
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

  /* // Button
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
  // CircleButton
  width: ${(props) => (props.diameter)}; */
  // ButtonShapes.circleのとき
  width: ${(props) => (props.buttonShape === ButtonShapes.circle ? props.diameter : (props.width ? props.width + "px" : "100%"))};

  height: ${(props) => (props.diameter)};

  /* border-radius: ${(props) => (props.rounded ? "100px" : "3px")};
  // CircleButton
  border-radius: 50%; */
  // 
  border-radius: ${(props) => (props.buttonShape === ButtonShapes.circle ? "50%" : (props.rounded ? "100px" : "3px"))};

  padding: ${(props) =>
    props.fontSize === FontSize.Tiny ? `${Space.TINY} ${Space.TINY}` : ""};
  padding: ${(props) =>
    props.fontSize === FontSize.Small ? `${Space.TINY} ${Space.SMALL}` : ""};
  padding: ${(props) =>
    props.fontSize === FontSize.Medium || props.fontSize === FontSize.H3
      ? `${Space.SMALL} ${Space.BASE}`
      : ""};
  padding: ${(props) =>
    props.fontSize === FontSize.Large || props.fontSize === FontSize.H2
      ? `${Space.BASE} ${Space.LARGE}`
      : ""};
  padding: ${(props) => (props.buttonType === ButtonTypes.text ? "0" : "")};

  background: ${(props) => (props.buttonType === ButtonTypes.primary ? Color.Primary : "")};
  background: ${(props) => (props.buttonType === ButtonTypes.warning ? Color.Warn : "")};
  background: ${(props) => (props.buttonType === ButtonTypes.danger ? Color.Danger : "")};
  background: ${(props) => (props.buttonType === ButtonTypes.info ? Color.White : "")};
  background: ${(props) => (props.buttonType === ButtonTypes.text ? "none" : "")};
  background: ${(props) => (props.buttonType === ButtonTypes.secondary ? Color.Secondary : "")};
  
  color: ${(props) => (props.buttonType === ButtonTypes.info ? Color.Gray : Color.White)};
  color: ${(props) => (props.buttonType === ButtonTypes.text ? Color.Black : "")};
  color: ${(props) => (props.buttonType === ButtonTypes.secondary ? Color.Black : "")};
  // CircleButtonからの移行部分
  color: ${(props) => (props.fontColor ? props.fontColor : Color.White)};

  border: ${(props) => (props.buttonType === ButtonTypes.info ? `1px solid ${Color.LightGray}` : "")};
  // CircleButton
  border: none;

  // CircleButtonのデフォルトを追加
  font-size: ${(props) => (props.fontSize ? props.fontSize : FontSize.H1)};
  line-height: ${(props) => (props.fontSize)};
  // CircleButton
  line-height: ${(props) => (props.diameter)};

  /* type */
  background: ${(props) => (props.buttonType === ButtonTypes.text ? "none" : "")};

  /* color */
  color: ${(props) => (props.fontColor === Color.Success && props.buttonType === ButtonTypes.text ? Color.Success : "")};
  color: ${(props) => (props.fontColor === Color.Danger && props.buttonType === ButtonTypes.text ? Color.Danger : "")};
  color: ${(props) => (props.fontColor === Color.Inactive && props.buttonType === ButtonTypes.text ? Color.Inactive : "")};

  /* size */

  &:hover {
    font-weight: ${(props) => (props.disabled ? "" : "bold")};
  }

  &:disabled {
    background-color: ${(props) =>
    props.buttonType !== ButtonTypes.text && props.disabled ? Color.Disabled : ""};
    color: ${(props) =>
    props.buttonType === ButtonTypes.text && props.disabled ? Color.White : ""};
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonPropsMap> = function (props) {
  const {
    specClass,
    buttonShape,
    buttonType,
    fontColor,
    fontSize,
    width,
    diameter,
    handleClick,
    disabled,
    rounded,
    label,
  } = props;
  return (
    <StyledButton
      className={specClass}
      onClick={handleClick}
      disabled={disabled}
      buttonShape={buttonShape}
      buttonType={buttonType}
      width={width}
      diameter={diameter}
      rounded={rounded}
      fontColor={fontColor}
      fontSize={fontSize}
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
