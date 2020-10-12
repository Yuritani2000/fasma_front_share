import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import Color from '../../../styles/Color';
import { FontFamily, FontSize } from '../../../styles/Font';
import SignInModalStyle from './StyledComponent';
import {Form,  Button }from './MockAtoms';

const SignInModal: React.FC = (props) => {
    return (
        <Modal
            isOpen={true}
            onAfterOpen={()=>{}}
            onRequestClose={()=>{}}
            style={SignInModalStyle}
            contentLabel={"Example Modal"}
        >
            <Parent>
                <Child1>ふぁすま</Child1>
                <Child2>
                    <div>メールアドレス</div>
                    <Form value={''} borderRadius={'5px'} onChange={()=>{}} width={'300px'} height={'30px'} placeholder={'メールアドレス'}/>
                </Child2>
                <Child3>
                    <div>パスワード</div>
                    <Form value={''} borderRadius={'5px'} onChange={()=>{}} width={'300px'} height={'30px'} placeholder={'パスワード'}/>
                </Child3>
                <Child4>
                    <div>アカウント</div>
                    <Button label={'アカウントを作成'} onClick={()=>{}} color={Color.WhiteSmoke}/>
                </Child4>
            </Parent>
        </Modal>
    );
}

const Parent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
`

const Child1 = styled.div`
    height: 100px;
    padding-top: calc(100px/2);
`
const Child2 = styled.div`
    height: 60px;
`
const Child3 = styled.div`
    height: 60px;
`
const Child4 = styled.div`
    height: 60px;
`


export default SignInModal;