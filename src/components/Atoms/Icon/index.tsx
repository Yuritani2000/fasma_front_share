import React from "react";
import styled from "styled-components";
import Color from "../../../styles/Color";
import { FontSize, FontFamily } from "../../../styles/Font";
import * as Icons from "react-icons/fa";

export type IconProps = {
  type: keyof typeof Icons;
  size?: string;
  color?: Color;
  handleClick?: () => void;
};

const Icon: React.FC<IconProps> = (props) => {
  const { size, color, handleClick, type} = props;
  const Icon = Icons[type];
  return (
    <StyledIcon size={size} color= {color} handleClick={handleClick}>
      <Icon />
    </StyledIcon>
  );
};

export default Icon;

const StyledIcon = styled.div<{size?: string, color?: Color, handleClick?: () => void;}>`
  size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-size: ${FontSize.Medium}px;
  font-family: ${FontFamily.Roboto};
`;
