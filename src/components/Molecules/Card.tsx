import React from 'react'
import styled from 'styled-components';

type Props = {
    childComponent?: React.ReactNode[],
    cardProps: StyledCardProps,
}

export type StyledCardProps = {
    cardHeightSize?: string,
    cardWidthSize?: string,
    radiusSize: string,
    backgroundColor: string,
}

const Card: React.FC<Props> = props => {
    const {
        cardHeightSize,
        cardWidthSize,
        radiusSize,
        backgroundColor
    } = props.cardProps
    return (
        <StyledCard cardHeightSize={cardHeightSize} cardWidthSize={cardWidthSize} radiusSize={radiusSize} backgroundColor={backgroundColor}>
            <StyledCenteringDiv>
                {props.childComponent ? props.childComponent.map((component) => { return component }) : <div />}
            </StyledCenteringDiv>
        </StyledCard >
    )
}

export default Card;

export const StyledCard = styled.div<StyledCardProps>(props => `
    display: inline-block;
    background:${props.backgroundColor};
    overflow:hidden;

    width:${props.cardWidthSize ? props.cardWidthSize : "auto"};
    height:${props.cardHeightSize ? props.cardHeightSize : "auto"};    
    border-radius: ${props.radiusSize};

    box-shadow: 0px 3px 8px 0 rgba(0, 0, 0, 0.25);
`)

const StyledCenteringDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`