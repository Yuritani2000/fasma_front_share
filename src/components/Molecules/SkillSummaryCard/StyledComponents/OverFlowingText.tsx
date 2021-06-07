import styled from 'styled-components';
import Text from '../../../Atoms/Text/index';

const OverFlowingText = styled(Text)`
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
`;