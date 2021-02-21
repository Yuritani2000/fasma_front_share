import React from 'react';
import styled from 'styled-components';
import Color from '../../styles/Color';

// ここに、Modalの器を作るよ。つまり、外側の
// 四角をここに実装するよ！
type ModalBaseProps = {

}


export const ModalBase = styled.div<ModalBaseProps>(props => `
    width: 420px;
    height: 550px;
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