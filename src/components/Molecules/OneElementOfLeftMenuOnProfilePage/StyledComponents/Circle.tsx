import styled from 'styled-components';
import Color from '../../../../styles/Color';

const Circle = styled.div(()=> `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${Color.Danger};
    color: ${Color.White};
    width: 2em;
    height: 2em;
    text-align: center;
    border-radius: 50%;
`);

export default Circle;