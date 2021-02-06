import styled from 'styled-components';
import Color from '../../../../styles/Color';

type ParentProps = { 
    width?: number;
    height?: number;
}

const Parent = styled.div<ParentProps>((props) => `
    position: relative;
    width: ${(props.width) ? props.width + 'px' : '750px'};
    height: ${(props.height) ? props.height + 'px' : '137px'};
    background-color: ${Color.White};
    border-bottom-style: solid;
    border-width: 2px;
    border-color: transparent transparent #bbb transparent;
`);

