import React from 'react';
import styled from 'styled-components'

export type ImageProps = {
    url: string,
    size?: number,
    sizeTypes?: keyof typeof ImageSize,
}

const Image: React.FC<ImageProps> = (props) => {
    var size:number = props.size? props.size: props.sizeTypes ? ImageSize[props.sizeTypes] : 100
    return (
        <StyledButtons src={props.url} size={size} />
    );
}

export default Image;

export enum ImageSize {
    SMALL = 160,
    MEDIUM = 180,
    NOMAL = 177,
    BIGGER = 240,
    LARGE = 300,
}

export type ImageStyleProps = {
    size: number
}

export const StyledButtons = styled.img<ImageStyleProps>(props => `
  object-fit: cover;
  width: ${props.size}px;
  height: ${props.size}px;
`)
