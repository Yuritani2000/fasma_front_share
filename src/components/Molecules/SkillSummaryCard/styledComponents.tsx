import styled from 'styled-components';
import Text from '../../Atoms/Text';
import Color from '../../../styles/Color';


export const AboutSkill = styled.div(()=>`
    flex-shrink: 0;
    box-sizing: border-box;
    width: calc(100% - 109px);
    border: solid;
    border-color: transparent;
    border-right-width: 15px;
    border-left-width: 15px;
`);

export const MultipleLines = styled.div(()=> `
    -webkit-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
`);

export const OverFlowingText = styled(Text)`
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
`;

type ParentProps = { 
    width?: number;
    height?: number;
}

export const Parent = styled.div<ParentProps>((props) => `
    position: relative;
    width: ${(props.width) ? props.width + 'px' : '750px'};
    height: ${(props.height) ? props.height + 'px' : '137px'};
    background-color: ${Color.White};
    border-bottom-style: solid;
    border-width: 2px;
    border-color: transparent transparent #bbb transparent;
`);

export const RowContainer = styled.div(() => `
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

export const TextParent = styled.div(()=>`
    margin-top: 5px;
`);

export const TriangleParent = styled.div(()=>`
    flex-shrink: 0;
    position: relative;
    width: 12px;
    height: 100%;
`);

export const TrianglePosition = styled.div(()=>`
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
`);
