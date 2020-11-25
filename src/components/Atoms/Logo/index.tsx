import React from 'react';
import styled from 'styled-components';
import logo_kari from './image.png';
import { FontSize } from "../../../styles/Font";

export type LogoProps = {
    size?: FontSize;
}

const StyledLogo = styled.div<LogoProps>(props => `
    cursor: pointer;
`);

const Logo: React.FC<LogoProps> = function (props) {
    const { size } = props;
    return (
        <StyledLogo size={size}>
            <img src={logo_kari} alt="Logo" />
        </StyledLogo>
    );
}

export default Logo;