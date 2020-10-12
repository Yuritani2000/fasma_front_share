import React from "react";
import styled from "styled-components";
import Color from "../../../styles/Color";
import { FontSize, FontFamily } from "../../../styles/Font";
import { IconContext } from "react-icons";
import { FaAccessibleIcon } from "react-icons/fa";

export type IconProps = {
  size?: string;
  color?: Color;
  handleClick?: () => void;
};

const Icon: React.FC<IconProps> = (props) => {
  const { size, color, handleClick } = props;
  return (
    <StyledIcon value={{ size: size, color: color }}>
      <FaAccessibleIcon />
    </StyledIcon>
  );
};

export default Icon;

const StyledIcon = styled(IconContext.Provider)`
  font-size: ${FontSize.Medium}px;
  font-family: ${FontFamily.Roboto};
`;
