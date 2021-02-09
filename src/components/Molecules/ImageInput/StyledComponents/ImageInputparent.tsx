import styled from 'styled-components';

type ImageInputParentProps = {
    width: number;
    height: number;
}

const ImageInputParent = styled.div<ImageInputParentProps>(()=> `
    position: relative;

`);