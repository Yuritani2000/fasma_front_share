import styled from 'styled-components';
import Color from '../../../../styles/Color';

type ParentProps = {
    width?: number;
    height?: number;
    isPushed?: boolean;    // その項目が選択状態にあるかどうかを示すprops
}

const Parent = styled.div<ParentProps>((props) => `
    position: relative;
    width: ${(props.width) ? props.width + 'px' : '291px'};
    height: ${(props.height) ? props.height + 'px' : '43px'};
    background-color: ${(props.isPushed) ? Color.Secondary : Color.WhiteSmoke };
    border: solid;
    border-width: 1px;
    border-color: ${Color.Border};
`);

export default Parent;