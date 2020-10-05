import React from 'react';
import styled from 'styled-components';

type Props = {
    styleProps: StyledCardProps
}

const Card: React.FC<Props> = (props) => {
    return (
        <StyledCard cardSize={props.styleProps.cardSize} radiusSize={props.styleProps.radiusSize} backgroundColor={props.styleProps.backgroundColor} >
        </StyledCard >
    )
}

export default Card;

type StyledCardProps = {
    cardSize: string,
    radiusSize: string,
    backgroundColor: string
}

const StyledCard = styled.div<StyledCardProps>(props => `
    display: inline-block;
    width:${props.cardSize};
    height:${props.cardSize};
    background:${props.backgroundColor};

    border-radius: ${props.radiusSize};
    box-shadow: 0px 7px 8px 0 rgba(0, 0, 0, 0.2);
`)