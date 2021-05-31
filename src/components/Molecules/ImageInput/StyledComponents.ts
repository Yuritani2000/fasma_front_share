import styled from 'styled-components';
import { ImageSize } from '../../Atoms/Image/Image';
import Color from '../../../styles/Color';
import { FontSize } from '../../../styles/Font';

type ButtonParentProps = {
    topPositionPercentage?: number;
    leftPositionPercentage?: number;
    isDisabled?: boolean
}

export const ButtonParent = styled.div<ButtonParentProps>((props)=>`
    visibility: ${(props.isDisabled) ? 'collapse' : 'visible'};
    position: absolute;
    top: ${(props.topPositionPercentage) ? props.topPositionPercentage + '%' : '0px'};
    left: ${(props.leftPositionPercentage) ? props.leftPositionPercentage + '%' : '0px'};
    transform: translate(${(props.topPositionPercentage || props.leftPositionPercentage) ? '-50%' : '0%'} , ${(props.topPositionPercentage || props.leftPositionPercentage) ? '-50%' : '0%'});
`);

type ImageInputParentProps = {
    size?: number,
    sizeTypes?: keyof typeof ImageSize,
}

export const ImageInputParent = styled.div<ImageInputParentProps>((props)=> `
    width: ${(props.size) ? props.size + 'px' : (props.sizeTypes) ? ImageSize[props.sizeTypes] + 'px' : '100px'};
    height: ${(props.size) ? props.size + 'px' : (props.sizeTypes) ? ImageSize[props.sizeTypes] + 'px' : '100px'};
    position: relative;

`);

export const StyledLabel = styled.label<{isDisplaying: boolean}>((props)=> `
    color: Black;
    background-color: ${Color.WhiteSmoke};
    border: solid;
    border-color: ${Color.Border};
    border-width: 2px;
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 100px;
    top: calc(100% - 32px);
    left: calc(100% - 32px);
    width: 36px;
    height: 36px;
    font-weight: bold;
    font-size: ${FontSize.Large};
    opacity: 1.0;
    display: ${props.isDisplaying ? 'block' : 'none'};
    cursor: pointer;
    text-align: center;
    line-height: 50px;
`);

export const IconParent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const IconPosition = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;