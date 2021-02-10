import styled from 'styled-components';
import { ImageSize } from '../../../Atoms/Image/Image';

type ImageInputParentProps = {
    size?: number,
    sizeTypes?: keyof typeof ImageSize,
}

const ImageInputParent = styled.div<ImageInputParentProps>((props)=> `
    width: ${(props.size) ? props.size + 'px' : (props.sizeTypes) ? ImageSize[props.sizeTypes] + 'px' : '100px'};
    height: ${(props.size) ? props.size + 'px' : (props.sizeTypes) ? ImageSize[props.sizeTypes] + 'px' : '100px'};
    position: relative;

`);

export default ImageInputParent;