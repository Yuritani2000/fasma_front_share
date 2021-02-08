import styled from 'styled-components';

const Container = styled.div(()=> `
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

export default Container;