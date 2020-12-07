import React from 'react';
import styled from 'styled-components'

export type ImageProps = {
    url: string,
    size?: string,
    sizeTypes?: keyof typeof ImageSize,
}

const Image: React.FC<ImageProps> = (props) => {
    var size = props.size? props.size: props.sizeTypes ? ImageSize[props.sizeTypes] : '100px' 
    console.log(size) 
    return (
        <StyledButtons src={props.url} size={size} />
    );
}

export default Image;

export enum ImageSize {
    SMALL = '160px',
    MEDIUM = '180px',
    NOMAL = '177px',
    BIGGER = '240px',
    LARGE = '300px',
}

export type ImageStyleProps = {
    size: string
}

export const StyledButtons = styled.img<ImageStyleProps>(props => `
  object-fit: cover;
  width: ${props.size};
  height: ${props.size};
`)
