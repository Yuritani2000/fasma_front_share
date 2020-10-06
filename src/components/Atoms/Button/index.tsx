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
  size?: string;
  width?: string;
  type?: string;
  specClass?: string;
  color?: Color;
  disabled?: boolean;
  rounded?: boolean;
  handleClick?: () => void;
};

export enum ButtonType {
  primary = 'primary',
  warning = 'warning',
  danger = 'danger',
  info = 'info',
  text = 'text',
};

const StyledButton = styled.button<any>`
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

  width: ${(props) => (props).width}px;

  border-radius: ${(props) => (props.rounded ? "100px" : "3px")};
  padding: ${(props) =>
    props.size === "Tiny" ? `${Space.TINY} ${Space.TINY}` : ""};
  padding: ${(props) =>
    props.size === "Small" ? `${Space.TINY} ${Space.SMALL}` : ""};
  padding: ${(props) =>
    props.size === "Medium" || props.size === "h3"
      ? `${Space.SMALL} ${Space.BASE}`
      : ""};
  padding: ${(props) =>
    props.size === "Large" || props.size === "h2"
      ? `${Space.BASE} ${Space.LARGE}`
      : ""};
  padding: ${(props) => (props.type === ButtonType.text ? "0" : "")};

  background: ${(props) => (props.type === ButtonType.primary ? Color.Primary : "")};
  background: ${(props) => (props.type === ButtonType.warning ? Color.Warn : "")};
  background: ${(props) => (props.type === ButtonType.danger ? Color.Danger : "")};
  background: ${(props) => (props.type === ButtonType.info ? Color.White : "")};
  background: ${(props) => (props.type === ButtonType.text ? "none" : "")};

  color: ${(props) => (props.type === ButtonType.info ? Color.Gray : "white")};
  color: ${(props) => (props.type === ButtonType.text ? Color.Black : "")};

  border: ${(props) => (props.type === ButtonType.info ? `1px solid ${Color.LightGray}` : "")};

  font-size: ${(props) => (props.size === "Tiny" ? FontSize.Tiny : "")};
  font-size: ${(props) => (props.size === "Small" ? FontSize.Small : "")};
  font-size: ${(props) => (props.size === "Medium" ? FontSize.Medium : "")};
  font-size: ${(props) => (props.size === "Large" ? FontSize.Large : "")};
  font-size: ${(props) => (props.size === "H4" || props.size === "body" ? FontSize.H4 : "")};
  font-size: ${(props) => (props.size === "H3" ? FontSize.H3 : "")};
  font-size: ${(props) => (props.size === "H2" ? FontSize.H2 : "")};
  font-size: ${(props) => (props.size === "H1" ? FontSize.H1 : "")};

  line-height: ${(props) => (props.size === "H4" || props.size === "body" ? FontSize.H4 : "")};
  line-height: ${(props) => (props.size === "H3" ? FontSize.H3 : "")};
  line-height: ${(props) => (props.size === "H3" ? FontSize.H2 : "")};
  line-height: ${(props) => (props.size === "H3" ? FontSize.H1 : "")};

  /* type */
  background: ${(props) => (props.type === ButtonType.text ? "none" : "")};

  /* color */
  color: ${(props) => (props.color === "success" && props.type === ButtonType.text ? Color.White : "")};
  color: ${(props) => (props.color === "danger" && props.type === ButtonType.text ? Color.White : "")};
  color: ${(props) => (props.color === "inactive" && props.type === ButtonType.text ? Color.White : "")};

  /* size */

  &:hover {
    font-weight: ${(props) => (props.disabled ? "" : "bold")};
  }

  &:disabled {
    background-color: ${(props) =>
    props.type !== ButtonType.text && props.disabled ? Color.Disabled : ""};
    color: ${(props) =>
    props.type === ButtonType.text && props.disabled ? Color.White : ""};
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonPropsMap> = function (props) {
  const {
    specClass,
    size,
    type,
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
      type={type}
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
  type: ButtonType.primary,
  disabled: false,
  rounded: false,
};

export default Button;
