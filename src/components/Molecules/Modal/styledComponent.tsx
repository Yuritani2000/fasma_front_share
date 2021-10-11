import styled from 'styled-components';
import Color from '../../../styles/Color';

// ログイン画面、スキル投稿画面などで使用するModalの枠
// 他のコンポーネントをこれで囲み、Organismsなどに実装して使用する。

export const ModalBase = styled.div(props => `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 9cm;
    height: 12cm;
    background: ${Color.White};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2%;
    box-shadow: 0 0.2em 0.7em #aaa;
`);