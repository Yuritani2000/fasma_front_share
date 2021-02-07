import styled from 'styled-components';
import Color from '../../../../styles/Color';

type ParentProps = {
    width?: number;
    height?: number;
    backgroundColor?: keyof typeof Color;    // 
}

const Parent = styled.div<ParentProps>((props) => `
    position: relative;
    width: ${(props.width) ? props.width + 'px' : '750px'};
    height: ${(props.height) ? props.height + 'px' : '69px'};
    background-color: ${(props.backgroundColor) ? Color[props.backgroundColor] : Color.WhiteSmoke };
    border: solid;
    border-width: 1px;
    border-color: ${Color.Border};
`);