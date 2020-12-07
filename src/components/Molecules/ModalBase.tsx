import styled from 'styled-components';

// ここに、Modalの器を作るよ。つまり、外側の
// 四角をここに実装するよ！

type ModalBaseProps = {

}

export const ModalBase = styled.div<ModalBaseProps>(props => `
    width: calc(11cm - (${window.parent.screen.width}px - 100vw)*0.1);
    height: calc(15cm - (${window.parent.screen.height}px - 100vh)*0.1);
    background: #fefefe;
    border-width: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2%;
    box-shadow: 0 0.2em 0.7em #aaa;
`);