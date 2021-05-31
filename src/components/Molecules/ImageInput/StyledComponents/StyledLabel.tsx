import styled from 'styled-components';
import Color from '../../../../styles/Color';
import { FontSize } from '../../../../styles/Font';

const StyledLabel = styled.label<{isDisplaying: boolean}>((props)=> `
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

export default StyledLabel;