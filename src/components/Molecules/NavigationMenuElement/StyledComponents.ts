import styled from 'styled-components';
import Color from '../../../styles/Color';

export const Circle = styled.div(()=> `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${Color.Danger};
    color: ${Color.White};
    width: 2.5em;
    height: 2.5em;
    text-align: center;
    border-radius: 50%;
`);

export const CircleParent = styled.div<{isVisible?: boolean}>((props)=> `
    visibility: ${(props.isVisible) ? 'visible' : 'hidden'};
    position: relative;
    width: 2em;
    margin-right: 15px;
`);

export const Container = styled.div(()=> `
width: 100%;
height: 100%;
border: solid;
box-sizing: border-box;
border-width: 10px;
border-color: transparent;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: row;
justify-content: space-between;
`);

export const NumberOfNotification = styled.div(()=>`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
color: ${Color.White};
background: transparent;
font-weight: bold;
font-size: 1.5em;
`);

type ParentProps = {
    width?: number;
    height?: number;
    isPushed?: boolean;    // その項目が選択状態にあるかどうかを示すprops
}

export const Parent = styled.div<ParentProps>((props) => `
    position: relative;
    width: ${(props.width) ? props.width + 'px' : '291px'};
    height: ${(props.height) ? props.height + 'px' : '43px'};
    background-color: ${(props.isPushed) ? Color.Secondary : Color.WhiteSmoke };
    border: solid;
    border-width: 1px;
    border-color: ${Color.Border};
`);

export const TextParent = styled.div(()=>`
    flex-grow: 2;
    align-self: center;
`);

export const TriangleParent = styled.div(()=> `
    align-self: center;
    position: relative;
    width: 12px;
    height: 29px;
`);

export const TrianglePosition = styled.div(()=> `
position: absolute;
left: 100%;
top: 50%;
transform: translate(-50%, -50%);
`);