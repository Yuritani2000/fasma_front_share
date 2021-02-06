import styled from 'styled-components';
import React from 'react';
import Color from '../../../styles/Color'

export type TriangleProps = {
    width?: number;
    height?: number;
    color?: keyof typeof Color;
}

const Triangle: React.FC<TriangleProps> = (props) => {
    const {width, height, color} = props;

    return (
        <StyledDiv width={width} height={height} color={color}/>
    );
}

type StyledDivProps = {
    width?: number;
    height?: number;
    color?: keyof typeof Color;
}

const StyledDiv = styled.div<StyledDivProps>((props) => `
    width: 0px;
    height: 0px;
    border-style: solid ;
    border-width: ${(props.height) ? props.height / 2 + 'px' : '10px'} 
                  ${(props.width) ? props.width / 2 + 'px' : '12px'}
                  ${(props.height) ? props.height / 2 + 'px' : '10px'}
                  ${(props.width) ? props.width / 2 + 'px' : '12px'};
    border-color: transparent transparent transparent ${(props.color) ? Color[props.color] : '#333'};
`);

export default Triangle;