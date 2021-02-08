import styled from 'styled-components';
import Text from '../../../Atoms/Text';
import Color from '../../../../styles/Color';

const NumberOfNotification = styled(Text)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${Color.White};
    background: transparent;
    font-weight: bold;
`;

export default NumberOfNotification;