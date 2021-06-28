import styled from 'styled-components';
import Color from '../../../styles/Color';

export const Container = styled.div(() => `
    background-color: ${Color.White};
    width: 750px;
    height: 475px;
    box-sizing: border-box;
    border: solid;
    border-color: transparent;
    border-left-width: 38px;
    border-right-width: 38px;
    border-top-width: 49px;
`);

type FlexBoxProps = {
  width?: number;
  height?: number;
  direction: string;
  isSpaceBetween: boolean
}

export const FlexBox = styled.div<FlexBoxProps>((props) => `
    display: flex;
    flex-direction: ${props.direction};
    justify-content: ${props.isSpaceBetween ? 'space-between' : 'flex-start'};
    width: ${(props.width) ? props.width + 'px' : '100%'};
    height: ${(props.height) ? props.height + 'px' : '100%'};
`);

type MarginBoxProps = {
  width?: number;
  height?: number;
  marginTop?: number;
  marginLeft?: number;
  marginBottom?: number;
  marginRight?: number;
}

export const MarginBox = styled.div<MarginBoxProps>((props) => `
    flex-shrink: 0;
    margin-top: ${props.marginTop ? props.marginTop + 'px' : '0px'};
    margin-left: ${props.marginLeft ? props.marginLeft + 'px' : '0px'};
    margin-bottom: ${props.marginBottom ? props.marginBottom + 'px' : '0px'};
    margin-right: ${props.marginRight ? props.marginRight + 'px' : '0px'};
    width: ${(props.width) ? props.width + 'px' : '100%'};
    height: ${(props.height) ? props.height + 'px' : '100%'};
`);

type FlexBoxChild = {
  alignSelf?: string;
}

export const FlexBoxChild = styled.div<FlexBoxChild>((props) => `
    flex-shrink: 0;
    align-self: ${props.alignSelf ? props.alignSelf : 'auto'};
`);
