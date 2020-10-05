import styled from 'styled-components';

export default Card;

export type StyledCardProps = {
    cardSize: string,
    radiusSize: string,
    backgroundColor: string
}

export const StyledCard = styled.div<StyledCardProps>(props => `
    display: inline-block;
    width:${props.cardSize};
    height:${props.cardSize};
    background:${props.backgroundColor};

    border-radius: ${props.radiusSize};
    box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.3);
`)