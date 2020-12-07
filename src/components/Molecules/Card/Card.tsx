import React from 'react'
import styled from 'styled-components';

type Props = {
    childComponent?: React.ReactNode,
    cardProps: StyledCardProps,
}

export type StyledCardProps = {
    styledCardSize: StyledCardSizeType,
    backgroundColor: string,
}

export type StyledCardSizeType = {
    cardHeightSize: number,
    cardWidthSize: number,
    radiusSize: number
}

export const StyledCardSizeDefault = {
    // #1~3 に対応
    TOP: {
        "cardHeightSize": 418,
        "cardWidthSize": 319,
        "radiusSize": 5
    },
    // #4 に対応
    SKILL: {
        "cardHeightSize": 238,
        "cardWidthSize": 177,
        "radiusSize": 5
    },
    // #6 に対応
    LISTING: {
        "cardHeightSize": 382,
        "cardWidthSize": 319,
        "radiusSize": 5
    },import React from 'react'
    import styled from 'styled-components';
    
    type Props = {
        childComponent?: React.ReactNode,
        cardProps: StyledCardProps,
        rotation?: boolean // 横長指定にする場合trueを指定する
    }
    
    export type StyledCardProps = {
        styledCardSize: StyledCardSizeType,
        backgroundColor: string,
    }
    
    export type StyledCardSizeType = {
        cardHeightSize: number,
        cardWidthSize: number,
        radiusSize: number
    }
    
    export const StyledCardSizeDefault = {
        // #1~3 に対応
        TOP: {
            "cardHeightSize": 418,
            "cardWidthSize": 319,
            "radiusSize": 5
        },
        // #4 に対応
        SKILL: {
            "cardHeightSize": 238,
            "cardWidthSize": 177,
            "radiusSize": 5
        },
        // #6 に対応
        LISTING: {
            "cardHeightSize": 382,
            "cardWidthSize": 319,
            "radiusSize": 5
        },
        // #9 に対応
        PURCHAISE: {
            "cardHeightSize": 376,
            "cardWidthSize": 319,
            "radiusSize": 5
        }
    }
    
    const Card: React.FC<Props> = props => {
        const {
            styledCardSize,
            backgroundColor
        } = props.cardProps
    
        if (props.rotation) styledCardSize.cardHeightSize = props.cardProps.styledCardSize.cardWidthSize 
        if (props.rotation) styledCardSize.cardWidthSize = props.cardProps.styledCardSize.cardHeightSize
        
        return (
            <StyledCard styledCardSize={styledCardSize} backgroundColor={backgroundColor}>
                <StyledCenteringDiv>
                    {props.childComponent ? props.childComponent : <div />}
                </StyledCenteringDiv>
            </StyledCard >
        )
    }
    
    export default Card;
    
    export const StyledCard = styled.div<StyledCardProps>(props => `
        display: inline-block;
        background:${props.backgroundColor};
        overflow:hidden;
    
        width:${props.styledCardSize.cardWidthSize + "px" ? props.styledCardSize.cardWidthSize + "px" : "100px"};
        height:${props.styledCardSize.cardHeightSize + "px" ? props.styledCardSize.cardHeightSize + "px" : "100px"};    
        border-radius: ${props.styledCardSize.radiusSize + "px"};
    
        box-shadow: 0px 3px 8px 0 rgba(0, 0, 0, 0.25);
    `)
    
    const StyledCenteringDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    // #9 に対応
    PURCHAISE: {
        "cardHeightSize": 376,
        "cardWidthSize": 319,
        "radiusSize": 5
    }
}

const Card: React.FC<Props> = props => {
    const {
        styledCardSize,
        backgroundColor
    } = props.cardProps
    return (
        <StyledCard styledCardSize={styledCardSize} backgroundColor={backgroundColor}>
            <StyledCenteringDiv>
                {props.childComponent ? props.childComponent : <div />}
            </StyledCenteringDiv>
        </StyledCard >
    )
}

export default Card;

export const StyledCard = styled.div<StyledCardProps>(props => `
    display: inline-block;
    background:${props.backgroundColor};
    overflow:hidden;

    width:${props.styledCardSize.cardWidthSize + "px" ? props.styledCardSize.cardWidthSize + "px" : "auto"};
    height:${props.styledCardSize.cardHeightSize + "px" ? props.styledCardSize.cardHeightSize + "px" : "auto"};    
    border-radius: ${props.styledCardSize.radiusSize + "px"};

    box-shadow: 0px 3px 8px 0 rgba(0, 0, 0, 0.25);
`)

const StyledCenteringDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`