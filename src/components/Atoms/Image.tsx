import React from 'react';
import styled from 'styled-components'

export type ImageProps = {
    url: string,
    size?: string,
    sizeTypes?: ImageSize,
}

const Image: React.FC<ImageProps> = (props) => {
    return (
        <StyledButtons src={props.url} size={props.size} sizeTypes={props.sizeTypes} />
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
    size?: string,
    sizeTypes?: string,
}

export const StyledButtons = styled.img<ImageStyleProps>(props => `
  object-fit: cover;
  width: ${props.size ? props.size : props.sizeTypes ? props.sizeTypes : "100%"};
  height: ${props.size ? props.size : props.sizeTypes ? props.sizeTypes : "100%"};
`)
