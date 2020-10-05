import React from 'react';
import styled from 'styled-components'

type Props = {
    url: string,
    size?: string,
}

const Image: React.FC<Props> = (props) => {
    return (
        <StyledButtons src={props.url} size={props.size} />
    );
}

export default Image;

type ImageProps = {
    size?: string,
}

export const StyledButtons = styled.img<ImageProps>(props => `
  object-fit: cover;
  width: ${props.size ? props.size : "100%"};
  height: ${props.size ? props.size : "100%"};
`)
