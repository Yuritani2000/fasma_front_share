import styled from 'styled-components';
import Color from '../../../../styles/Color';

type ParentProps = {
    width: number;
    height: number;
}

const Parent = styled.div<ParentProps>((props) => `
    position: relative;
    width: 750px;
    height: 69px;
    background-color: #fefefefe;
    border-bottom-style: solid;
    border-width: 2px;
    border-color: transparent transparent #bbb transparent;
`);