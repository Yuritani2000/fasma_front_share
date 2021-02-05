import styled from 'styled-components';
import React from 'react';
import Color from '../../../styles/Color'

type TriangleProps = {
    width?: number;
    height?: number;
    color?: Color;
    top?: number;
    left?: number;
    rotate?: number;
}

const Triangle: React.FC<TriangleProps> = (props) => {
    const {width, height, color, top, left, rotate} = props;

    return (
        <StyledDiv/>
    );
}

type StyledDivProps = {
    width?: number;
    height?: number;
    color?: Color;
    top?: number;
    left?: number;
    rotate?: number;
}

const StyledDiv = styled.div<StyledDivProps>((props) => `
    width: 0px;
    height: 0px;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-style: solid ;
    border-width: 10px 12px 10px 12px;
    border-color: transparent transparent transparent #333;
`);
