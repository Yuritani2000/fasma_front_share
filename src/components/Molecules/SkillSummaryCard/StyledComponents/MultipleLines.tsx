import styled from 'styled-components';

const MultipleLines = styled.div(()=> `
    -webkit-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
`);

export default MultipleLines;