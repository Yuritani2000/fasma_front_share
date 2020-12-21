import styled from 'styled-components';

// ここに、Modalの器を作るよ。つまり、外側の
// 四角をここに実装するよ！

type ModalBaseProps = {

}

export const ModalBase = styled.div<ModalBaseProps>(props => `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 9cm;
    height: 12cm;
    background: #fefefe;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2%;
    box-shadow: 0 0.2em 0.7em #aaa;
`);