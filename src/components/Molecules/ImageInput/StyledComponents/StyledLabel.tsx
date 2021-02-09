import styled from 'styled-components';
import Color from '../../../../styles/Color';

type StyledLabelProps = {
    color?: keyof typeof Color;
    disabled?: boolean;
    rounded?: boolean;
}

const StyledLabel = styled.div<StyledLabelProps>((props)=> `
    color: ${(props.color) ? Color[props.color] : Color.White};
    
`);