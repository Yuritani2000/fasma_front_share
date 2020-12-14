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
  label?: string;
  size?: FontSize;
  width?: string;
  buttonType?: ButtonTypes;
  specClass?: string;
  color?: Color;
  disabled?: boolean;
  rounded?: boolean;
  handleClick?: () => void;
};

export enum ButtonTypes {
  primary = 'primary',
  warning = 'warning',
  danger = 'danger',
  info = 'info',
  text = 'text',
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

  width: ${(props) => (props.width ? props.width + "px" : "100%")};

  border-radius: ${(props) => (props.rounded ? "100px" : "3px")};
  padding: ${(props) =>
    props.size === FontSize.Tiny ? `${Space.TINY} ${Space.TINY}` : ""};
  padding: ${(props) =>
    props.size === FontSize.Small ? `${Space.TINY} ${Space.SMALL}` : ""};
  padding: ${(props) =>
    props.size === FontSize.Medium || props.size === FontSize.H3
      ? `${Space.SMALL} ${Space.BASE}`
      : ""};
  padding: ${(props) =>
    props.size === FontSize.Large || props.size === FontSize.H2
      ? `${Space.BASE} ${Space.LARGE}`
      : ""};
  padding: ${(props) => (props.buttonType === ButtonTypes.text ? "0" : "")};

  background: ${(props) => (props.buttonType === ButtonTypes.primary ? Color.Primary : "")};
  background: ${(props) => (props.buttonType === ButtonTypes.warning ? Color.Warn : "")};
  background: ${(props) => (props.buttonType === ButtonTypes.danger ? Color.Danger : "")};
  background: ${(props) => (props.buttonType === ButtonTypes.info ? Color.White : "")};
  background: ${(props) => (props.buttonType === ButtonTypes.text ? "none" : "")};

  color: ${(props) => (props.buttonType === ButtonTypes.info ? Color.Gray : "white")};
  color: ${(props) => (props.buttonType === ButtonTypes.text ? Color.Black : "")};

  border: ${(props) => (props.buttonType === ButtonTypes.info ? `1px solid ${Color.LightGray}` : "")};

  font-size: ${(props) => (props.size)};
  line-height: ${(props) => (props.size)};

  /* type */
  background: ${(props) => (props.buttonType === ButtonTypes.text ? "none" : "")};

  /* color */
  color: ${(props) => (props.color === Color.Success && props.buttonType === ButtonTypes.text ? Color.Success : "")};
  color: ${(props) => (props.color === Color.Danger && props.buttonType === ButtonTypes.text ? Color.Danger : "")};
  color: ${(props) => (props.color === Color.Inactive && props.buttonType === ButtonTypes.text ? Color.Inactive : "")};

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
    size,
    buttonType,
    color,
    width,
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
      size={size}
      buttonType={buttonType}
      width={width}
      rounded={rounded}
      color={color}
    >
      {label}
    </StyledButton>
  );
};

Button.defaultProps = {
  size: FontSize.Medium,
  buttonType: ButtonTypes.primary,
  disabled: false,
  rounded: false,
};

export default Button;
