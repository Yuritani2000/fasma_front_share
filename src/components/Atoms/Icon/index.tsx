import React from "react";
import styled from "styled-components";
import Color from "../../../styles/Color";
import { FontSize, FontFamily } from "../../../styles/Font";
import * as Icons from "react-icons/md";

export type IconProps = {
  type: keyof typeof Icons;
  size?: keyof typeof FontSize;
  color?: Color;
  handleClick?: () => void;
};

const Icon: React.FC<IconProps> = (props) => {
  const { size = 'Medium', color = Color.Gray, handleClick, type } = props;
  const Icon = Icons[type];
  return (
    <StyledIcon size={size} color={color} onClick={handleClick}>
      <Icon />
    </StyledIcon>
  );
};

export default Icon;

const StyledIcon = styled.div<{ size: keyof typeof FontSize, color?: Color }>(props => `
  color: ${props.color};
  font-size: ${FontSize[props.size]};
`);
