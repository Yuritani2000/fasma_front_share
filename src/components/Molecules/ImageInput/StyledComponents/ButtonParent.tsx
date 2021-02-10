import styled from 'styled-components';

type ButtonParentProps = {
    topPositionPercentage?: number;
    leftPositionPercentage?: number;
    isDisabled?: boolean
}

const ButtonParent = styled.div<ButtonParentProps>((props)=>`
    visibility: ${(props.isDisabled) ? 'collapse' : 'visible'};
    position: absolute;
    top: ${(props.topPositionPercentage) ? props.topPositionPercentage + '%' : '0px'};
    left: ${(props.leftPositionPercentage) ? props.leftPositionPercentage + '%' : '0px'};
    transform: translate(${(props.topPositionPercentage || props.leftPositionPercentage) ? '-50%' : '0%'} , ${(props.topPositionPercentage || props.leftPositionPercentage) ? '-50%' : '0%'});
`);

export default ButtonParent;