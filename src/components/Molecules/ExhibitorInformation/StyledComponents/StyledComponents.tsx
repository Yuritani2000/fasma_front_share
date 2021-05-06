import styled from 'styled-components';
import Color from '../../../../styles/Color';

export const Parent = styled.div(()=> `
    border: solid;
    border-radius: 6px;
    border-color: ${Color.Secondary};
    background-color: ${Color.White};
    border-width: 2px;
    width: 370px;
    height: 202px;
`);

export const Container = styled.div(()=> `
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: solid;
    border-color: transparent;
    border-width: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`);

export const ContactAreaParent = styled.div(()=> `
    width: 330px;
`);

export const FlexBox = styled.div<{flexDirection?: string}>((props)=> `
    display: flex;
    flex-direction: ${(props.flexDirection) ? props.flexDirection : 'row'};
`);

export const ContactTextStyle = styled.div(()=> `
    background-color: ${Color.Secondary};
    border: none;
    border-radius: 4px;
    padding: 3px 10px 3px 10px;
    margin-bottom: 10px;
    align-self: flex-start;
`);

export const ContactItemStyle = styled.div<{isVisible?: boolean}>((props)=> `
    border: solid;
    border-width: 1px;
    border-radius: 4px;
    border-color: ${Color.Secondary};
    padding: 3px 5px 3px 5px;
    display: ${(props.isVisible) ? 'block' : (props.isVisible === false) ? 'none' : 'block'};
    margin-right: 5px;
`);