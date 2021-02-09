import styled from 'styled-components';

const CircleParent = styled.div<{isVisible?: boolean}>((props)=> `
    visibility: ${(props.isVisible) ? 'visible' : 'hidden'};
    position: relative;
    width: 2em;
    margin-right: 15px;
`);

export default CircleParent;