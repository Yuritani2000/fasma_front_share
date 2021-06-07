import styled from 'styled-components';

const RowContainer = styled.div(() => `
    width: 100%;
    height: 100%;
    border: solid;
    box-sizing: border-box;
    border-width: 20px;
    border-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`);

export default RowContainer;